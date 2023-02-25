from django.db import models

class Sub(models.Model):
    nick = models.TextField(max_length=100)
    profile_url = models.TextField(max_length=3000, name="profileUrl")
    description = models.TextField(max_length=3000)
    created_at = models.DateField(auto_now=True, name="createdAt")
    update_at = models.DateField(auto_now_add=True, name="updatedAt")

    def __str__(self):
        return f"{self.id} {self.nick}"
