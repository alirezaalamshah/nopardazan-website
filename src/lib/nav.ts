export const siteConfig = {
  name: 'نوپردازان زندگی هوشمند',
  tagline: 'شرکت مهندسی نرم‌افزار',
  phone: '021-88476334',
  phoneSecondary: '026-34214699',
  mobile: '0935-1155702',
  email: 'info@nopardazan.com',
  whatsapp: 'https://wa.me/989351155702',
};

export const solutionLinks = [
  { title: 'باشگاه مشتریان و کارت وفاداری', href: '/solutions/loyalty-club/' },
  { title: 'فروشگاه‌ساز اینترنتی', href: '/solutions/online-store/' },
  { title: 'یکپارچه‌سازی حسابداری سپیدار', href: '/solutions/sepidar-integration/' },
  { title: 'صدور و مدیریت تگ NFC', href: '/solutions/nfc-tag-management/' },
];

export const hardwareLinks = [
  { title: 'کارت‌خوان ACR122U NFC', href: '/hardware/acr122u-nfc-reader/' },
  { title: 'کارت‌خوان RFID مایفر', href: '/hardware/rfid-mifare-reader/' },
];

export const mainNav = [
  { title: 'خانه', href: '/' },
  { title: 'راهکارها', href: '/solutions/', children: solutionLinks },
  { title: 'سخت‌افزار', href: '/hardware/', children: hardwareLinks },
  { title: 'نمونه‌کارها', href: '/portfolio/' },
  { title: 'درباره ما', href: '/about/' },
  { title: 'نظرات مشتریان', href: '/testimonials/' },
];
