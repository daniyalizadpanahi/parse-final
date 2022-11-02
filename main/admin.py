from .models import Rate, Project, Feedback, News, Article


class ProjectAdmin:
    model = Project
    uri = 'projects/'
    label = 'Projects'
    icon = 'mdiProjector'

    fields = ('id', 'title', 'state', 'published', 'lang', 'image')


class ArticleAdmin:
    model = Article
    uri = 'articles/'
    label = 'Articles'
    icon = 'mdiYoutubeStudio'


class FeedbackAdmin:
    model = Feedback
    uri = 'feedbacks/'
    label = 'Feedbacks'
    icon = 'mdiChartBubble'


class NewsAdmin:
    model = News
    uri = 'news/'
    label = 'News'
    icon = 'mdiNewspaper'


class RateAdmin:
    model = Rate
    uri = 'rates/'
    label = 'Rates'
    icon = 'mdiStar'

    fields = ('id', 'content', 'stars', 'date', 'name', 'show')
