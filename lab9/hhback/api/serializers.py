# api/serializers.py
from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address'] # Include 'id'

class VacancySerializer(serializers.ModelSerializer):
    # To show company name instead of just ID (optional, but often better UX)
    # company = CompanySerializer(read_only=True)
    # company_id = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all(), source='company', write_only=True)

    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company'] # Include 'id', 'company' (FK id)
        # If using the nested serializer approach above, change fields to:
        # fields = ['id', 'name', 'description', 'salary', 'company', 'company_id']

# Simple Serializer just showing company ID (as per default ModelSerializer behavior)
class VacancySerializerSimple(serializers.ModelSerializer):
     class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company']