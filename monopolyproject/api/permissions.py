from rest_framework import permissions

class ReadOnly(permissions.BasePermission):
    def has_permission(self, request):
        return request.method in permissions.SAFE_METHODS


class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user