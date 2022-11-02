from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.contrib.auth.models import AbstractUser, UserManager as BaseManager


LANG = (
    ('fa', 'persian'),
    ('en', 'english'),
    ('ar', 'arabic')
)


class Feedback(models.Model):
    id = models.AutoField(primary_key=True)
    news = models.ForeignKey('main.News', on_delete=models.CASCADE)
    content = models.TextField(_('Content'))
    title = models.CharField(_('Title'), max_length=100)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    star = models.PositiveSmallIntegerField(_('Rate'))


class Project(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(_('Title'), max_length=150)
    description = models.CharField(_('Description'), max_length=100)
    content = models.TextField(_('Content'))
    STATES = (
        ('s', _('Started')),
        ('p', _('On Progress')),
        ('f', _('Finished'))
    )
    state = models.CharField(_('State'), choices=STATES, max_length=1)
    image = models.ImageField(_('Image'), upload_to='static/projects/', null=True)
    lang = models.CharField(_('lang'), max_length=2, choices=LANG, default='fa')
    published = models.DateField(default=timezone.now)

    def rates_count(self):
        return self.rates.aggregate(avg_stars=models.Avg('stars'))['avg_stars']


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    lang = models.CharField(_('lang'), max_length=2, choices=LANG)
    title = models.CharField(_('Title'), max_length=255)
    description = models.TextField(_('Description'))
    date = models.DateField(_('Sent at'), default=timezone.now)
    image = models.ImageField(_('image'), upload_to='static/articles')


class Rate(models.Model):
    id = models.AutoField(primary_key=True)
    content = models.TextField(_('Content'))
    stars = models.PositiveSmallIntegerField(_('Stars'))
    name = models.CharField(_('Name'), max_length=100)
    email = models.EmailField(_('Email'))
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    date = models.DateTimeField(_('Date'), default=timezone.now)
    show = models.BooleanField(_('Show on site?'), default=False)


class News(models.Model):
    id = models.AutoField(primary_key=True)
    publish_date = models.DateTimeField(_('Publish Date'), default=timezone.now)
    title = models.CharField(_('Title'), max_length=255)
    content = models.TextField(_('Content'))


class FAQ(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(_('Title'), max_length=255)
    content = models.TextField(_('Content'))
    time = models.DateTimeField(_('Time'), default=timezone.now)
    email = models.EmailField(_('Email'))
    name = models.CharField(_('Name'), max_length=255)


class UserManager(BaseManager):

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)

    def _create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not email:
            raise ValueError('The given username must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(_('Image'), upload_to='static/projects/')
    username = None
    email = models.EmailField(_('Email Address'), unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = UserManager()


__all__ = [
    'User', 'Project', 'Article', 'Rate', 'News', 'Feedback',
    'FAQ'
]

