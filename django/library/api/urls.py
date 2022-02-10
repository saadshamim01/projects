from django.urls import include, path
from .views import BookAPIView

urlpatterns = [
    path('', BookAPIView.as_view())
]

