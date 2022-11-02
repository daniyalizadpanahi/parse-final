from django.http import JsonResponse
from django.urls import path, include
from .forms import UserForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, authenticate, logout
from django.core.paginator import Paginator, EmptyPage
from .models import User


# ------------------------------------- WRAPPERS METHOD
def POST(function):

    def wrapper(request, *args, **kwargs):
        if request.method != 'POST':
            return JsonResponse({'error': 'GET method not allowed'}, status=403)

        return function(request, *args, **kwargs)
    return wrapper
# -------------------------------------


@POST
def Login(request):

    form = AuthenticationForm(data=request.POST)

    if form.is_valid():
        user = authenticate(request, username=form.cleaned_data['username'],
                            password=form.cleaned_data['password'])
        if user:
            login(request, user=user)
            return JsonResponse({'email': user.email,
                                 'first_name': user.first_name, 'last_name': user.last_name})

    return JsonResponse(form.errors, status=422)


def Logout(request):
    logout(request)
    return JsonResponse({'status': 'SUCCESS'})


@POST
def Register(request):

    form = UserForm(data=request.POST)

    if form.is_valid():
        user = User.objects.create(**form.data)
        login(request, user)
        return JsonResponse({'status': 'SUCCESS'})

    return JsonResponse(form.errors, status=422)


class PublicAPI:
    """
    Api class Manager for Models.
    """
    _registry = set()

    def register(self, *args):
        """
        Register an Api model into The api
        routes.
        """
        for model_api in args:
            self._registry.add(model_api())

    @property
    def urls(self):
        """
        Gets All urls registered in registry
        """
        return [path(api.uri, include(api.urls)) for api in self._registry] +\
            [path('login/', Login), path('register/', Register), path('logout/', Logout)]


class ModelAPI:
    """
    An API Model for the Public api.
    """
    model = None
    fields = None
    uri = None

    def all(self, request):
        """
        Returns all records of the model
        """
        instances = Paginator(list(
            self.model.objects.values(*self.fields)), per_page=6)

        return JsonResponse({
            'data': instances.get_page(request.GET.get('page', 1)).object_list,
            'pages': instances.num_pages
        })

    def object(self, request, pk):
        """
        Returns an instance of the model if existed.
        """
        return JsonResponse(self.model.objects.filter(pk=pk).values().first(), safe=False)

    @property
    def urls(self):
        return [
            path('', self.all),
            path('<int:pk>', self.object)
        ]
