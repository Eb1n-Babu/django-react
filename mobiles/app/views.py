from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Products
from .serializers import ProductsSerializer


# Create your views here.
class ProductDetailView(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    #permission_classes = [IsAuthenticated]



