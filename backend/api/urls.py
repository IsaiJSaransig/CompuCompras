from rest_framework import routers
from .views import ProductViewSet, CartViewSet, CartProductViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'carts', CartViewSet)
router.register(r'cart_products', CartProductViewSet)

urlpatterns = router.urls