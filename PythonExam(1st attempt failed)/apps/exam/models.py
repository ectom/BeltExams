from __future__ import unicode_literals
from django.db import models
# Create your models here.

class UserManager(models.Manager):
    def basic_validator(self, post_data):
        errors = {}
        if len(post_data['name']) < 3:
			errors['name'] = "Name must be at least 3 characters long"
        if len(post_data['username']) < 3:
			errors['username'] = "Username must be at least 3 characters long"
        if len(post_data['password']) < 8:
			errors['password'] = "Password must be at least 8 characters long"
        if post_data['password'] != post_data['confirm']:
			errors['password'] = "Password must match password confirmation field"
        print errors
        return errors

class User(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    objects = UserManager()
    def __repr__(self):
        return "{}, {}>".format(self.name, self.username)

class ItemManager(models.Manager):
    def item_validator(self, post_data):
        errors = {}
        if len(post_data['name']) < 3:
            errors['name'] = "Item name must be at least 3 characters long"
        print errors
        return errors

class Item(models.Model):
    name = models.CharField(max_length=255)
    added_by = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    users = models.ForeignKey(User, related_name='items')
    wish = models.ManyToManyField(User, related_name='to_items')
    objects = ItemManager()
    def __repr__(self):
        return "{}, {}>".format(self.name, self.added_by)
