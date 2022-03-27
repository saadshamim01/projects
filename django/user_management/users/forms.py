from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


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