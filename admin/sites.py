from django.apps import apps
from django.http import JsonResponse
from django.shortcuts import render, redirect

from .options import ModelAdmin


class AdminSite:
    """
    Admin App manager. This is where it all happens.
    """
    dashboard = None
    _registry = set()
    Login_view = None
    p = {'view', 'change', 'add', 'delete'}

    def __init__(self):
        """
        Checks every app and registers it to admin.
        """
        self.checks()

    def checks(self):
        """
        checks every app to see if admin
        exists
        :return:
        """

        for app in apps.get_app_configs():
            if app.name.startswith('django'):
                continue

            try:
                module = __import__(app.name + '.admin')
            except ImportError:
                continue

            for attr in dir(module.admin):
                if attr.endswith('Admin'):
                    self.register(getattr(module.admin, attr))

    def api_urls(self):
        """
        Returns admin api urls.
        :return:
        """
        from django.urls import path, include
        return [
                   path(m_a.uri, include(m_a.urls)) for m_a in self._registry
               ] + [path('apps/', self.apps), path('me/', self.user_identity),]
        # path('login/', include(self.Login_view.as_view())),

    def view_urls(self):
        """
        Returns view uri's.
        :return:
        """
        from django.urls import re_path
        return [re_path('.*', self.app_index)]

    @property
    def urls(self):
        """
        Returns admin urls to the urlpatterns as include.
        :return:
        """
        return self.view_urls(), 'admin_api', 'admin_api'

    @property
    def urls_api(self):
        return self.api_urls(), 'admin', 'admin'

    def register(self, admin_class):
        """
        Register the given admin class (Can be Model Consumer Sub class).
        Note that there is no need to import Model Consumer and subclass it.
        :param admin_class:
        :return:
        """
        if issubclass(admin_class, ModelAdmin):
            self._registry.add(admin_class())
        else:
            self._registry.add(type(admin_class.__name__, (admin_class, ModelAdmin), {})())

    def app_index(self, request):
        """
        Return index page including the js loaders and vue
        :param request:
        :type request: django.http.request.HttpRequest
        :return:
        """
        if request.user.is_staff:
            return render(request, 'admin/index.html', {'apps': self._build_app_dict(request.user)})

        return redirect('/403')

    def apps(self, request):
        """
        All apps user with current permission can use
        :type request: django.http.request.HttpRequest
        :param request:
        :return HttpResponse:
        """
        app_d = self._build_app_dict(request.user)
        return JsonResponse(app_d, safe=False)

    def _build_app_dict(self, user):
        """
        Build the app dictionary based on
        user permissions
        :param user:
        :type user: django.contrib.auth.get_user_model()
        :return list:
        """
        return [
            {
                'title': m_a.label,
                'to': '/resource/' + m_a.uri,
                'icon': m_a.icon,
            } for m_a in self._registry
            if user.has_perms(f'{m_a.model._meta.app_label}.{per}_{m_a.model._meta.model_name}'
                              for per in self.p)
        ]

    @classmethod
    def user_identity(cls, request):
        """
        Returns the user identity
        """
        user = request.user
        if not user.is_authenticated:
            return JsonResponse({'error': 'Please login first'})

        return JsonResponse({
            'first_name': user.first_name,
            'last_name': user.last_name,
            'username': user.username
        })


site = AdminSite()
