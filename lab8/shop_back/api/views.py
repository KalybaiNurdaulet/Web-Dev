from django.shortcuts import render

from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from .models import Product, Category

class ProductListView(View):
    def get(self, request):
        products = list(Product.objects.values())
        return JsonResponse(products, safe=False)

class ProductDetailView(View):
    def get(self, request, id):
        product = get_object_or_404(Product, id=id)
        return JsonResponse({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category": product.category.id,
        })

class CategoryListView(View):
    def get(self, request):
        categories = list(Category.objects.values())
        return JsonResponse(categories, safe=False)

class CategoryDetailView(View):
    def get(self, request, id):
        category = get_object_or_404(Category, id=id)
        return JsonResponse({"id": category.id, "name": category.name})

class CategoryProductsView(View):
    def get(self, request, id):
        products = list(Product.objects.filter(category_id=id).values())
        return JsonResponse(products, safe=False)

