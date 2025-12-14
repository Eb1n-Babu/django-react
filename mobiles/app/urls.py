from django.urls import path, include
from rest_framework import routers
from .views import ProductDetailView
#from rest_framework_simplejwt.views import TokenObtainPairView
#from rest_framework_simplejwt.views import TokenRefreshView


router = routers.DefaultRouter()
router.register(r"items",ProductDetailView)

urlpatterns = [
    path('',include(router.urls)),
    #path('token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    #path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh'),
]
