# api/models.py
from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True) # Allow description to be optional
    city = models.CharField(max_length=100)
    address = models.TextField()

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies" # Correct plural name for admin

    def __str__(self):
        return self.name

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True) # Allow description to be optional
    salary = models.FloatField(default=0.0) # Provide a default salary
    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE, # If company deleted, delete its vacancies
        related_name='vacancies'  # Allows easy access: company.vacancies.all()
    )

    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies" # Correct plural name for admin

    def __str__(self):
        return f"{self.name} ({self.company.name})"