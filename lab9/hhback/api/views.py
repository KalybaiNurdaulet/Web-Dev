from django.shortcuts import render

# api/views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializerSimple # Use the simple one

# --- Company Views ---

@api_view(['GET']) # Allow only GET requests
def company_list(request):
    """
    List all Companies.
    """
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, id):
    """
    Retrieve one Company by its ID.
    """
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

@api_view(['GET'])
def company_vacancies(request, id):
    """
    List all vacancies for a specific Company ID.
    """
    try:
        # Ensure company exists before trying to filter vacancies
        company = Company.objects.get(pk=id)
        # vacancies = company.vacancies.all() # Using related_name
        # OR explicitly filter:
        vacancies = Vacancy.objects.filter(company_id=id)
    except Company.DoesNotExist:
        return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
    # Removed the Vacancy.DoesNotExist check as filter() returns an empty list if no match, which is fine

    if request.method == 'GET':
        serializer = VacancySerializerSimple(vacancies, many=True)
        return Response(serializer.data)


# --- Vacancy Views ---

@api_view(['GET'])
def vacancy_list(request):
    """
    List all Vacancies.
    """
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializerSimple(vacancies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def vacancy_detail(request, id):
    """
    Retrieve one Vacancy by its ID.
    """
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist:
        return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VacancySerializerSimple(vacancy)
        return Response(serializer.data)

@api_view(['GET'])
def vacancy_top_ten(request):
    """
    List top 10 vacancies sorted by decreasing salary.
    """
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10] # Order descending and take top 10
        serializer = VacancySerializerSimple(vacancies, many=True)
        return Response(serializer.data)
