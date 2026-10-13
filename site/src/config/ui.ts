import type { Lang } from './site';

export interface UiStrings {
  nav_guides: string;
  nav_about: string;
  nav_inquiry: string;
  home_h1: string;
  home_latest: string;
  home_cta: string;
  guides_title: string;
  guides_empty: string;
  inquiry_title: string;
  inquiry_intro: string;
  inquiry_button: string;
  inquiry_not_configured: string;
  funnel_bottom: string;
  funnel_mid: string;
  funnel_top: string;
  read_article: string;
  question_label: string;
  sources_label: string;
  comment_label: string;
  faq_label: string;
  footer_note: string;
  contact_heading: string;
  contact_whatsapp: string;
  contact_email: string;
  contact_office: string;
  whatsapp_prefill: string;
}

export const UI: Record<Lang, UiStrings> = {
  en: {
    nav_guides: 'Buying guides',
    nav_about: 'About us',
    nav_inquiry: 'Get a quote',
    home_h1: 'Guangzhou sourcing, done on the ground.',
    home_latest: 'Latest guides',
    home_cta: 'Ask us about your product',
    guides_title: 'Buying guides',
    guides_empty: 'No guides published in this language yet.',
    inquiry_title: 'Start an inquiry',
    inquiry_intro:
      'Tell us the product, target landed price and quantity. We reply with a factory shortlist, MOQ, unit price range and QC plan.',
    inquiry_button: 'Compose inquiry email',
    inquiry_not_configured: 'email not configured',
    funnel_bottom: 'Ready to order',
    funnel_mid: 'Comparing options',
    funnel_top: 'Researching',
    read_article: 'Read the guide',
    question_label: 'Original buyer question',
    sources_label: 'Sources',
    comment_label: 'Comment thread (nobody answered)',
    faq_label: 'Frequently asked questions',
    contact_heading: 'Contact',
    contact_whatsapp: 'WhatsApp',
    contact_email: 'Email',
    contact_office: 'Office',
    whatsapp_prefill: 'Hi — product, target landed price and quantity:',
    footer_note: 'Independent sourcing office in Guangzhou — factories, markets, QC.',
  },
  ru: {
    nav_guides: 'Гайды для закупщиков',
    nav_about: 'О нас',
    nav_inquiry: 'Запросить смету',
    home_h1: 'Закупки в Гуанчжоу на месте: фабрики, рынки, контроль качества.',
    home_latest: 'Свежие гайды',
    home_cta: 'Обсудить ваш товар',
    guides_title: 'Гайды для закупщиков',
    guides_empty: 'На этом языке гайдов пока нет.',
    inquiry_title: 'Отправить запрос',
    inquiry_intro:
      'Опишите товар, целевую цену с доставкой и объём. Ответим шорт-листом фабрик, MOQ, диапазоном цены и планом QC.',
    inquiry_button: 'Сформировать письмо-запрос',
    inquiry_not_configured: 'email не настроен',
    funnel_bottom: 'Готовы к заказу',
    funnel_mid: 'Сравниваем варианты',
    funnel_top: 'Изучаем рынок',
    read_article: 'Читать гайд',
    question_label: 'Вопрос покупателя (оригинал)',
    sources_label: 'Источники',
    comment_label: 'Тред комментария (никто не ответил)',
    faq_label: 'Частые вопросы',
    contact_heading: 'Контакты',
    contact_whatsapp: 'WhatsApp',
    contact_email: 'Почта',
    contact_office: 'Офис',
    whatsapp_prefill: 'Здравствуйте — товар, целевая цена с доставкой и объём:',
    footer_note: 'Собственный офис саппорнинга в Гуанчжоу — фабрики, рынки, приёмка.',
  },
  ar: {
    nav_guides: 'أدلة الشراء',
    nav_about: 'من نحن',
    nav_inquiry: 'اطلب عرض سعر',
    home_h1: 'توريد الملابس من قوانغتشو على أرض الواقع: مصانع، أسواق، فحص جودة.',
    home_latest: 'أحدث الأدلة',
    home_cta: 'تحدّث عنا عن منتجك',
    guides_title: 'أدلة الشراء',
    guides_empty: 'لا توجد أدلة منشورة بهذه اللغة بعد.',
    inquiry_title: 'ابدأ طلب عرض',
    inquiry_intro:
      'أرسل وصف المنتج والسعر المستهدف شامل التوصيل والكمية. نرد بقائمة مصانع مقترحة، الحد الأدنى للطلب، نطاق السعر وخطة الفحص.',
    inquiry_button: 'تجهيز رسالة الاستفسار',
    inquiry_not_configured: 'لم يتم إعداد البريد الإلكتروني',
    funnel_bottom: 'جاهز للطلب',
    funnel_mid: 'نقارن الخيارات',
    funnel_top: 'مرحلة البحث',
    read_article: 'اقرأ الدليل',
    question_label: 'سؤال المشتري الأصلي',
    sources_label: 'المصادر',
    comment_label: 'خيوط التعليق (لم يرد أحد)',
    faq_label: 'الأسئلة الشائعة',
    contact_heading: 'التواصل',
    contact_whatsapp: 'واتساب',
    contact_email: 'البريد الإلكتروني',
    contact_office: 'المكتب',
    whatsapp_prefill: 'مرحباً — المنتج والسعر المستهدف شامل التوصيل والكمية:',
    footer_note: 'مكتب توريد مستقل في قوانغتشو — مصانع، أسواق، فحص جودة.',
  },
};

export const FUNNEL_KEYS: Record<Lang, Record<'bottom' | 'mid' | 'top', string>> = {
  en: { bottom: 'bottom', mid: 'mid', top: 'top' },
  ru: { bottom: 'bottom', mid: 'mid', top: 'top' },
  ar: { bottom: 'bottom', mid: 'mid', top: 'top' },
};
