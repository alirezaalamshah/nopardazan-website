# نوپردازان زندگی هوشمند — وب‌سایت جدید

بازطراحی وب‌سایت شرکت نوپردازان زندگی هوشمند با Astro، برای بهترین پرفورمنس ممکن.

## پشته فناوری

- [Astro](https://astro.build) — خروجی استاتیک
- Tailwind CSS v4
- Astro Content Collections برای محتوای راهکارها، سخت‌افزار، نمونه‌کارها و نظرات مشتریان
- فونت وزیرمتن (self-hosted)

## دستورها

| دستور | کاربرد |
| :--- | :--- |
| `npm install` | نصب وابستگی‌ها |
| `npm run dev` | اجرای سرور توسعه روی `localhost:4321` |
| `npm run build` | ساخت نسخه نهایی در `./dist/` |
| `npm run preview` | پیش‌نمایش نسخه‌ی build‌شده |
| `npx astro check` | بررسی خطاهای TypeScript/تمپلیت |

## ساختار پروژه

```
src/
  components/   کامپوننت‌های قابل‌استفاده مجدد (Header، Footer، Card، فرم تماس و ...)
  content/      محتوای راهکارها، سخت‌افزار، نمونه‌کارها و نظرات مشتریان (Markdown)
  layouts/      Layout پایه سایت
  lib/          توابع کمکی مشترک
  pages/        صفحات و route‌های سایت
public/         فایل‌های استاتیک (favicon، robots.txt)
```

## استقرار

انتشار خودکار روی GitHub Pages با هر push به شاخه‌ی `main` (نگاه کنید به `.github/workflows/deploy.yml`).
