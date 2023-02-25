from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from api.serializers import UserSerializer, GroupSerializer, SubSerializer
from api.models import Sub


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class SubViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows sub to be viewed or edited.
    """
    queryset = Sub.objects.all().order_by("-id")
    serializer_class = SubSerializer
    # permission_classes = [permissions.IsAuthenticated]

