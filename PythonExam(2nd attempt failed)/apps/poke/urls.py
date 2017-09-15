from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^success$', views.success),
    url(r'^pokes$', views.pokes),
    url(r'^action/(?P<user_id>\d+)$', views.action),
    url(r'^logout$', views.logout),
]
