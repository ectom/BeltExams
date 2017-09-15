from django.conf.urls import url, include
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^dashboard$', views.dashboard),
    url(r'^logout$', views.logout),
    url(r'^wish_items/create$', views.create),
    url(r'^add$', views.add),
    url(r'^wish_items/(?P<item_id>\d+)$', views.item),
    url(r'^wish_add/(?P<item_id>\d+)$', views.wish_add),
    url(r'^wish_remove/(?P<item_id>\d+)$', views.wish_remove),
    url(r'^delete/(?P<item_id>\d+)$', views.delete),
]
