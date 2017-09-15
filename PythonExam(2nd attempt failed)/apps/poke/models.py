from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def basic_validator(self, post_data):
        errors = {}
        if len(post_data['name']) < 3:
			errors['name'] = "Name must be at least 3 characters long"
        if len(post_data['alias']) < 3:
			errors['alias'] = "Alias must be at least 3 characters long"
        if not re.match(EMAIL_REGEX, post_data['email']):
            errors['email'] = "Email must be of correct format."
        if len(post_data['password']) < 8:
			errors['password'] = "Password must be at least 8 characters long"
        if post_data['password'] != post_data['confirm']:
			errors['password'] = "Password must match password confirmation field"
        print errors
        return errors

class User(models.Model):
    name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    poke_history = models.IntegerField(default=0)
    password = models.CharField(max_length=255)
    objects = UserManager()
    def __repr__(self):
        return "{}, {}>".format(self.name, self.poke_history)

class Poke(models.Model):
    poked_by = models.CharField(max_length=255)
    poke_number = models.IntegerField(default=1)
    user = models.ManyToManyField(User, related_name='pokes')
    def __repr__(self):
        return "{}, {}>".format(self.poked_by, self.user)
