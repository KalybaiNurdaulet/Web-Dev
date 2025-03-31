from django.contrib import admin

# api/admin.py

from .models import Company, Vacancy

# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'city') # Customize columns shown in list view
    search_fields = ('name', 'city', 'description') # Add search capability

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'salary') # Customize columns
    list_filter = ('company', 'salary') # Add filters
    search_fields = ('name', 'description') # Add search capability
    list_select_related = ('company',) # Optimize query for company name in list display
