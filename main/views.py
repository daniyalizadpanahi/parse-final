from django.db.models import Q, Avg, Count
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.urls import path
from django.shortcuts import render, get_object_or_404
from .api import ModelAPI, PublicAPI
from main.models import *
from main.forms import RateForm, FaqForm


def index(request):
    return render(request, 'site/index.html')


class ArticleAPI(ModelAPI):
    model = Article
    uri = 'articles/'
    fields = ('lang', 'title', 'description', 'date', 'image')


class RateAPI(ModelAPI):
    model = Rate
    uri = 'rates/'
    fields = ('stars', 'content', 'date', 'name')


class ProjectAPI(ModelAPI):
    model = Project
    uri = 'projects/'
    fields = ('id', 'title', 'description', 'state', 'image', 'lang', 'published')

    def projects(self, request, state):
        instances = Paginator(list(
            self.model.objects.filter(state=state,
                                      lang=request.GET.get('lang', 'en')).values(*self.fields)), per_page=6)

        return JsonResponse({
            'data': instances.get_page(request.GET.get('page', 1)).object_list,
            'pages': instances.num_pages
        })

    def rated_projects(self, request, lang):
        return JsonResponse(list(
            Project.objects.filter(lang=lang).annotate(
                rate_count=Count('rate')).extra(order_by=['-rate_count']).values()[:5])
            , safe=False)

    def project_rates(self, request, pk):
        return JsonResponse(list(
            Rate.objects.filter(project_id=pk,
                                show=True).values(*RateAPI.fields)), safe=False)

    def submit_rate(self, request, pk):
        form = RateForm(data=request.POST)
        if form.is_valid():
            instance = get_object_or_404(Project, pk=pk)
            Rate.objects.create(**form.cleaned_data, project=instance)
            return JsonResponse({'status': 'SUCCESS'}, status=201)

        return JsonResponse(form.errors, status=422)

    def projects_count(self, request):
        return JsonResponse({'started': Project.objects.filter(state='s').count(),
                             'progress': Project.objects.filter(state='p').count(),
                             'finished': Project.objects.filter(state='f').count()
                             })

    @property
    def urls(self):
        return [path('<int:pk>/', self.object), path('<int:pk>/rates', self.project_rates),
                path('<int:pk>/rate', self.submit_rate),
                path('<str:state>/', self.projects),
                path('rated/<str:lang>', self.rated_projects),
                path('count', self.projects_count)
                ]


class FAQAPI(ModelAPI):
    model = FAQ
    uri = 'faq/'
    fields = ('title', 'content', 'email', 'title')
    all = None
    object = None

    def submit(self, request):
        form = FaqForm(data=request.POST)
        if form.is_valid():
            FAQ.objects.create(**form.cleaned_data)
            return JsonResponse({'status': 'SUCCESS'}, status=201)

        return JsonResponse(form.errors, status=422)

    @property
    def urls(self):
        return [
            path('', self.submit),
        ]


class NewsAPI(ModelAPI):
    model = News
    uri = 'news/'
    fields = ('publish_date', 'title', 'content')


site = PublicAPI()

site.register(ArticleAPI, ProjectAPI, RateAPI, NewsAPI, FAQAPI)


urlpatterns = site.urls
