from django.urls import path
from .views import home, RegisterView, profile

urlpatterns=[
    path('', home, name='users-home'),
    path('profile/', profile, name='profile'),
    path('register/', RegisterView.as_view(), name='users-register'),
]