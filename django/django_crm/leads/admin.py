from django.contrib import admin
from .models import User, Agent, Lead



class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'username')
admin.site.register(User, UserAdmin)


class AgentAdmin(admin.ModelAdmin):
    list_display = ('user',)
admin.site.register(Agent, AgentAdmin)

class LeadAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'age', 'agent')
admin.site.register(Lead, LeadAdmin)
