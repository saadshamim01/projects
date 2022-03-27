from django.urls import path
from .views import home, RegisterView, CustomLoginView


urlpatterns=[
    path('', home, name='users-home'),
    path('register/', RegisterView.as_view(), name='users-register'),
]