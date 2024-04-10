from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='product_images')

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

class Cart(models.Model):
    products = models.ManyToManyField(Product, through='CartProduct')
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    total = models.DecimalField(decimal_places=2, default=0, max_digits=10, null=True)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = 'Cart'
        verbose_name_plural = 'Carts'

class CartProduct(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.product.title
