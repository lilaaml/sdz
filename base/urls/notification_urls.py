from django.urls import path
from base.views import notification_views as views

urlpatterns = [

    path('', views.getNotifications, name="notifications"),

    path('create/', views.createNotification, name="notification-create"),

    path('<str:pk>/', views.getNotification, name="notification"),

    path('update/<str:pk>/', views.updateNotification, name="notification-update"),
    path('delete/<str:pk>/', views.deleteNotification, name="notification-delete"),
]
