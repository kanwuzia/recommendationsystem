"""my_web_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import recommendation_system.views as recommendation_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/signup/', recommendation_views.signup, name='signup'),
    path('accounts/activate/<uidb64>/<token>/',
         recommendation_views.activate, name='activate'),
    path('accounts/account_activation_sent/', recommendation_views.account_activation_sent,
         name='account_activation_sent'),
    path('accounts/profile', recommendation_views.profile, name='profile')
]
