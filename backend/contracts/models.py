from django.db import models

# Create your models here.


class Contract(models.Model):
    CATEGORY_CHOICES = [
        ('doctor', 'پزشک'),
        ('pharmacy', 'داروخانه'),
        ('store', 'فروشگاه'),
    ]
    name = models.CharField("نام طرف قرارداد", max_length=255)
    category = models.CharField("دسته‌بندی", max_length=20, choices=CATEGORY_CHOICES)
    address = models.TextField("آدرس")
    phone = models.CharField("شماره تماس", max_length=20, blank=True)
    location_link = models.URLField("لینک لوکیشن روی نقشه", max_length=500, blank=True, help_text="مثلاً لینک گوگل مپ یا ویز")

    class Meta:
        verbose_name = "طرف قرارداد"
        verbose_name_plural = "طرف‌های قرارداد"

    def __str__(self):
        return self.name