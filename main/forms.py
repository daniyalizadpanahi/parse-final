from django import forms


class UserForm(forms.Form):
    first_name = forms.CharField(max_length=255)
    last_name = forms.CharField(max_length=255)
    email = forms.EmailField()


class RateForm(forms.Form):
    name = forms.CharField(max_length=255)
    email = forms.EmailField()
    content = forms.CharField()
    stars = forms.IntegerField()


class FaqForm(forms.Form):
    title = forms.CharField(max_length=255)
    email = forms.EmailField()
    content = forms.CharField()
    name = forms.CharField(max_length=255)
