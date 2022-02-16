import os
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
from channels.auth import AuthMiddlewareStack
import realtimelecture.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pyeonAir.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    # Just HTTP for now. (We can add other protocols later.)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            realtimelecture.routing.websocket_urlpatterns
        )
    )
})