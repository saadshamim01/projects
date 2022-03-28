from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

from .models import Profile


class UpdateUserForm(forms.ModelForm):
    username = forms.CharField(max_length=100, required=True, widget=forms.TextInput(attrs={
        'class': 'form-control',
    }))

    email = forms.EmailField(max_length=100, required=True, widget=forms.TextInput(attrs={
        'class': 'form-control',
    }))

    class Meta:
        model=User
        fields=['username', 'email']

class UpdateProfileForm(forms.ModelForm):
    avatar = forms.ImageField(widget=forms.FileInput(attrs={
        'class': 'form-control-input'
        }))
    
    bio = forms.CharField(max_length=200, required=True, widget=forms.Textarea(attrs={
        'class': 'form-control',
        'rows': 5,
    }))

    class Meta:
        model=Profile
        fields=['avatar', 'bio']



class RegisterForm(UserCreationForm):
    
    first_name = forms.CharField(max_length=100, required=100, widget=forms.TextInput(attrs={
        'placeholder': 'First Name',
        'class': 'form-control',
    }))

    last_name = forms.CharField(max_length=100, required=100, widget=forms.TextInput(attrs={
        'placeholder': 'Last Name',
        'class': 'form-control',
    }))
    
    username = forms.CharField(max_length=100, required=100, widget=forms.TextInput(attrs={
        'placeholder': 'Username',
        'class': 'form-control',
    }))

    email = forms.CharField(max_length=100, required=100, widget=forms.TextInput(attrs={
        'placeholder': 'Email',
        'class': 'form-control',

    }))

    password1 = forms.CharField(max_length=50, required=50, widget=forms.PasswordInput(attrs={
        'placeholder': 'Confirm Password',
        'class': 'form-control',
        'data-toggle': 'password',
        'id': 'password',
    }))
    
    password2 = forms.CharField(max_length=50, required=50, widget=forms.PasswordInput(attrs={
        'placeholder': 'Confirm Password',
        'class': 'form-control',
        'data-toggle': 'password',
        'id': 'password',
    }))

    class Meta:
        model=User
        fields=['first_name', 'last_name', 'username', 'email', 'password1', 'password2']


class LoginForm(AuthenticationForm):
    
    username = forms.CharField(max_length=100, required=True, widget=forms.TextInput(attrs={
        'placeholder': 'Username',
        'class': 'form-control',
    }))

    password = forms.CharField(max_length=50, required=True, widget=forms.PasswordInput(attrs={
        'placeholder': 'Enter Password',
        'class': 'form-control',
    }))

    remember_me = forms.BooleanField(required=False)

    class Meta:
        model = User
        fields = ['username', 'password', 'remember_me']
