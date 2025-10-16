from django.contrib import admin
from .models import Contract
import openpyxl
from django.http import HttpResponse

@admin.register(Contract)
class ContractAdmin(admin.ModelAdmin):
    # نمایش ستون‌ها در لیست اصلی
    list_display = ('name', 'get_category_display', 'phone', 'location_link')
    
    # فیلتر کردن بر اساس دسته‌بندی
    list_filter = ('category',)
    
    # جستجو بر اساس نام و آدرس
    search_fields = ('name', 'address')
    
    # تعداد آیتم‌ها در هر صفحه
    list_per_page = 20
    
    # مرتب‌سازی پیش‌فرض
    ordering = ('name',)

    # سفارشی‌سازی فرم ورود اطلاعات
    fieldsets = (
        (None, {
            'fields': ('name', 'category')
        }),
        ('اطلاعات تماس و آدرس', {
            'classes': ('wide',),
            'fields': ('address', 'phone', 'location_link'),
        }),
    )
    
    # نمایش بهتر برای فیلدهای خالی
    empty_value_display = '---'

    def location_link(self, obj):
        if obj.location_link:
            return f'<a href="{obj.location_link}" target="_blank">مشاهده روی نقشه</a>'
        return '---'
    location_link.allow_tags = True
    location_link.short_description = 'لوکیشن'

    def export_as_excel(self, request, queryset):
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename=contracts.xlsx'
        
        wb = openpyxl.Workbook()
        ws = wb.active
        ws.append(['نام', 'دسته‌بندی', 'آدرس', 'شماره تماس', 'لینک لوکیشن'])
        
        for obj in queryset:
            ws.append([obj.name, obj.get_category_display(), obj.address, obj.phone, obj.location_link])
        
        wb.save(response)
        return response
        
    export_as_excel.short_description = "خروجی اکسل موارد انتخاب شده"
    actions = [export_as_excel]