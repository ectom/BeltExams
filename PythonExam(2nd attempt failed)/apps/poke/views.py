from django.shortcuts import render, redirect, HttpResponse
from .models import *
from django.contrib import messages
import bcrypt
from time import strftime, gmtime
# Create your views here.
def index(request):
    return render(request, 'poke/index.html')

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if request.method == "POST":
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            return redirect('/')
        else:
            alias_check = User.objects.filter(alias=request.POST['alias'])
            if alias_check.count() > 0:
                messages.error(request, "alias already taken", extra_tags="alias")
                return redirect('/')
            email_check = User.objects.filter(email=request.POST['email'])
            if email_check.count() > 0:
                messages.error(request, "email already taken", extra_tags="email")
                return redirect('/')
            else:
                hashed = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
                create_user = User.objects.create(name=request.POST['name'], alias=request.POST['alias'], email=request.POST['email'], poke_history=0, password=hashed)
                request.session['user_id'] = create_user.id
                request.session['name'] = create_user.name
                return redirect('/success')
            return redirect('/success')
    else:
        return redirect('/')

def login(request):
    users = User.objects.filter(email=request.POST['email'])
    if users.count() > 0:
        user = users.first()
        if bcrypt.checkpw(request.POST['password'].encode(), user.password.encode()) == True: # checks for correct password
            request.session['user_id'] = user.id
            request.session['name'] = user.name
            print user
            return redirect('/success')
        else:
            messages.error(request, "Login Failed", extra_tags="alias")
            return redirect('/')
    else:
		messages.error(request, "Login Failed", extra_tags="alias")
		return redirect('/')

def success(request):
    return redirect('/pokes')

def pokes(request):
    data = {
        'poked_by': User.objects.get(id=request.session['user_id']),
        'pokers': User.objects.exclude(id=request.session['user_id']),
    }
    return render(request, 'poke/pokes.html', data)

def logout(request):
    request.session.clear()
    return redirect('/')

def action(request, user_id):
    u = User.objects.get(id=request.session['user_id'])
    u.save()
    q = Poke.objects.create(poked_by=request.session['name'])
    k = Poke.objects.create(user=user_id)
    u2.user.add(u)
    q.save()
    k.save()
    u.poke_history += u2.poke_number
    print u
    print u2
    return redirect('/pokes')
