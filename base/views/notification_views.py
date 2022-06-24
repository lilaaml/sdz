from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import Notification
from base.serializers import NotificationSerializer

from rest_framework import status


@api_view(['GET'])
def getNotifications(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''

    notifications = Notification.objects.filter(
        title__icontains=query).order_by('-createdAt')

    page = request.query_params.get('page')
    paginator = Paginator(notifications, 5)

    try:
        notifications = paginator.page(page)
    except PageNotAnInteger:
        notifications = paginator.page(1)
    except EmptyPage:
        notifications = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)
    print('Page:', page)
    serializer = NotificationSerializer(notifications, many=True)
    return Response({'notifications': serializer.data, 'page': page, 'pages': paginator.num_pages})

@api_view(['GET'])
def getNotification(request, pk):
    notification = Notification.objects.get(_id=pk)
    serializer = NotificationSerializer(notification, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createNotification(request):
    user = request.user

    notification = Notification.objects.create(
        title = 'Sample Title',
        description='Sample Desc',
        link='Link to Product',
    )

    serializer = NotificationSerializer(notification, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateNotification(request, pk):
    data = request.data
    notification = Notification.objects.get(_id=pk)

    notification.title = data['title']
    notification.description = data['description']
    notification.link = data['link']

    notification.save()

    serializer = NotificationSerializer(notification, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteNotification(request, pk):
    notification = Notification.objects.get(_id=pk)
    notification.delete()
    return Response('Notification Deleted')
