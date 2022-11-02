from django.forms import ModelForm
from django.http import JsonResponse
from django.core.paginator import Paginator
from django.shortcuts import get_object_or_404, Http404
from .serializers import serialize


class ModelAdmin:
    """
    Model Admin class for managing your
    models.
    """
    permissions = {'add', 'change', 'delete', 'view'}
    form = None
    model = None
    exclude = ()
    fields = ()

    def __init__(self):
        """
        Initial check if class is constructed correctly.
        """
        self.meta = self.model._meta
        if not self.fields:
            self.fields = tuple(field.name for field in self.meta.fields if field.name not in self.exclude)
        self.form = self.form or self.generate_form()

    @property
    def urls(self):
        """
        Get urls for api's. It will be included in
        AdminSite class.
        """
        from django.urls import path

        return [
            path('', self.index, name='index'),
            path('create/', self.create, name='create'),
            path('<int:pk>/', self.retrieve, name='retrieve'),
            path('<int:pk>/change/', self.change, name='change'),
            path('<int:pk>/delete/', self.delete, name='delete')
        ]

    def index(self, request):
        """
        Gets pagination of records.
        """
        if not self.has_perm(request.user, 'view'):
            return JsonResponse({'error':
                                 "You don't have permission to do this action"}, status=403)

        # paginate = Paginator(list(self.model.objects.values(*self.fields)), 25)
        #
        # instances = paginate.get_page(request.GET.get('p'))

        return JsonResponse({'data': list(self.model.objects.values(*self.fields)),
                             'actions': self.available_actions(request.user)})

    def create(self, request):
        """
        validates the data, Creates an instance.
        """
        if not self.has_perm(request.user, 'add'):
            return JsonResponse({'error':
                                 "You don't have permission to do this action"}, status=403)

        if request.method == 'GET':
            return JsonResponse({'form': self.form().as_p()})

        form = self.form(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return JsonResponse({'status': 'SUCCESS'}, status=201)

        return JsonResponse(form.errors, status=422)

    def change(self, request, pk=None):
        """
        Updates an instance if it finds any
        """
        if not self.has_perm(request.user, 'change'):
            return JsonResponse({'error':
                                 "You don't have permission to commit this action"}, status=403)

        instance = self.model.objects.filter(pk=pk)
        if not instance:
            raise Http404('No object found with this primary key')

        if request.method == 'GET':
            return JsonResponse({'form': self.form(instance=instance.first()).as_p()})

        form = self.form(request.POST, request.FILES, instance=instance.first())

        if form.is_valid():
            form.save()
            return JsonResponse({'status': 'SUCCESS'}, status=201)

        return JsonResponse(form.errors, status=422)

    def retrieve(self, request, pk=None):
        """
        Returns an instance data.
        """
        if not self.has_perm(request.user, 'view'):
            return JsonResponse({'error':
                                 "You don't have permission to do this action"}, status=403)

        instance = get_object_or_404(self.model.objects.values(*self.fields), pk=pk)

        return JsonResponse(instance)

    def delete(self, request, pk=None):
        """
        Deletes an instance.
        """
        if not self.has_perm(request.user, 'delete'):
            return JsonResponse({'error':
                                 "You don't have permission to do this action"}, status=403)

        get_object_or_404(self.model, pk=pk).delete()

        return JsonResponse({'status': 'SUCCESS'}, status=201)

    def has_perm(self, user, action):
        """
        Determines if user has permission to
        commit the action.
        """
        return user.has_perm(f'{self.meta.app_label}.{action}_{self.meta.model_name}')

    def available_actions(self, user):
        """
        Gets available actions user can
        commit.
        """
        return {action: self.has_perm(user, action)
                for action in self.permissions}

    def generate_form(self):
        context = {'model': self.model, 'fields': '__all__'}
        return type('%sForm' % self.model.__name__, (ModelForm, ), {
            'Meta': type('Meta', (object, ), context)})


