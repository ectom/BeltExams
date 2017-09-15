from django.shortcuts import render, redirect, HttpResponse
from .models import *
from django.contrib import messages
import bcrypt
from time import strftime, gmtime
# Create your views here.
def index(request):
    return render(request, 'exam/index.html')

def register(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/')
    else:
        user = User.objects.filter(username=request.POST['username'])
        if user.count() > 0:
            messages.error(request, "username already taken", extra_tags="username")
            return redirect('/')
        else:
            hashed = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
            create_user = User.objects.create(name=request.POST['name'], username=request.POST['username'], password=hashed)
            request.session['user_id'] = create_user.id
            request.session['name'] = create_user.name
            print user
            return redirect('/dashboard')
        return redirect('/dashboard')

def login(request):
    users = User.objects.filter(username=request.POST['username'])
    if users.count() > 0:
        user = users.first()
        if bcrypt.checkpw(request.POST['password'].encode(), user.password.encode()) == True: # checks for correct password
            request.session['user_id'] = user.id
            request.session['name'] = user.name
            print user
            return redirect('/dashboard')
        else:
            messages.error(request, "Login Failed", extra_tags="email")
            return redirect('/')
    else:
		messages.error(request, "Login Failed", extra_tags="username")
		return redirect('/')

def dashboard(request):
    data = {
        'wish_items': Item.objects.filter(wish=request.session['user_id']),
        'non_wish': Item.objects.exclude(wish=request.session['user_id']),
    }
    return render(request, 'exam/dashboard.html', data)

def logout(request):
    request.session.clear()
    return redirect('/')

def create(request):
    return render(request, 'exam/create.html')

def add(request):
    errors = Item.objects.item_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(requonnohhg4est, error, extra_tags=tag)
        return redirect('/wish_items/create')
    else:
        create_item = Item.objects.create(name=request.POST['name'], added_by=request.POST['user'], users_id=request.session['user_id']) #creates item
        the_item = Item.objects.get(id=create_item.id)
        the_user = User.objects.get(id=request.session['user_id'])
        the_item.wish.add(the_user)
        return redirect('/dashboard')

def item(request, item_id):
    data = {
        'item': Item.objects.get(id=item_id),
        'users': User.objects.filter(to_items__id=item_id)
    }
    return render(request, 'exam/item.html', data)

def wish_add(request, item_id):
    the_item = Item.objects.get(id=item_id)
    the_user = User.objects.get(id=request.session['user_id'])
    the_item.wish.add(the_user)
    the_item.save()
    return redirect('/dashboard')

def wish_remove(request, item_id):
    the_item = Item.objects.get(id=item_id)
    the_user = User.objects.get(id=request.session['user_id'])
    the_item.wish.remove(the_user)
    the_item.save()
    return redirect('/dashboard')

def delete(request, item_id):
    the_item = Item.objects.get(id=item_id)
    the_item.delete()
    return redirect('/dashboard')
