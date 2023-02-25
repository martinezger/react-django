from time import sleep
from django.core.management import call_command
try:
    call_command("migrate", interactive=False)
except:
    print("wait 10 sec to do a second migration attempt")
    sleep(10)
finally:
    call_command("migrate", interactive=False)
