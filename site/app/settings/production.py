from .base import *

DEBUG = False

# Local settings on each deployment instance
# SECRET_KEY, ALLOWED_HOSTS, EMAIL_BACKEND, DATABASES, etc.
try:
    from .local import *
except ImportError:
    pass