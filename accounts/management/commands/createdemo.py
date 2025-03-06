from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    help = 'Create a demo account: Demo / Azerty1234'

    def handle(self, *args, **options):
        if not User.objects.filter(username='Demo').exists():
            User.objects.create_user(username='Demo', password='Azerty1234')
            self.stdout.write(self.style.SUCCESS('Demo account created.'))
        else:
            self.stdout.write('Demo account already exists.')
