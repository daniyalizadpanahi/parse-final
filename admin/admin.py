from django import forms
from main.models import User
from django.contrib.auth.models import Group


class UserForm(forms.ModelForm):
    first_name = forms.CharField(max_length=255, label='First Name')
    last_name = forms.CharField(max_length=255, label='Last Name')
    is_active = forms.BooleanField(label='Is Active', help_text='User can login')

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'is_staff', 'is_active', 'email', 'image')


class UserAdmin:
    # form = UserForm
    model = User
    uri = 'users/'
    label = 'Users'
    icon = 'mdiAccount'
    # fields = ('id', 'first_name', 'last_name', 'last_login', 'email')
    exclude = ('password', )


class GroupAdmin:
    model = Group
    uri = 'groups/'
    label = 'Groups'
    icon = 'mdiGroup'

