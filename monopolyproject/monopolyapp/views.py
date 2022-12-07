from django.shortcuts import render

def GamePage(request):
    return render(request, 'gamepage.html')
