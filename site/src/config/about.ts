import type { Lang } from './site';

export interface AboutService {
  name: string;
  body: string;
}

export interface AboutContent {
  meta_title: string;
  meta_description: string;
  h1: string;
  who_heading: string;
  who: string;
  services_heading: string;
  services: AboutService[];
  office_heading: string;
  office_lines: string[];
  author_role: string;
  author_bio: string;
  cta: string;
}

/**
 * Static trust page (E-E-A-T + entity extraction), one entry per language.
 * Physical-entity claims only: market names, inspection standards, payment gate.
 * No street address, no factory counts, no client names.
 */
export const ABOUT: Record<Lang, AboutContent> = {
  en: {
    meta_title: 'About Us — Guangzhou apparel sourcing & QC office',
    meta_description:
      'Shun Sourcing is an independent apparel sourcing and QC office in Guangzhou: market rounds, tech packs, factory vetting, NNN, AQL 2.5 inspections.',
    h1: 'Who we are',
    who_heading: 'The office',
    who: 'Shun Sourcing is an independent apparel procurement and quality control office based on the ground in Guangzhou, China. We work for overseas buyers — brands, small wholesalers and DTC operators — as the party in China that finds the factory, controls the sample and signs off the goods before your balance is released.',
    services_heading: 'What we actually do',
    services: [
      {
        name: 'Market sourcing',
        body: 'Daily rounds across Shisanhang (十三行), Zhanxi (站西), Shahe (沙河) and Zhongda fabric market (中大面料市场). Quotes come from the stall or the CMT shop that holds the fabric now, not from a listing photo.',
      },
      {
        name: 'Tech pack & sampling',
        body: 'Turning overseas sketches into production-ready tech packs: measurement tables with tolerances, fabric and trim specs, GSM (克重), size sets, lab-dip and strike-off approvals.',
      },
      {
        name: 'Factory vetting & NNN',
        body: 'Screening CMT (cut-make-trim) facilities, verifying the business license against the PRC registration, and putting a PRC-enforceable NNN agreement in place before tooling or fabric money moves.',
      },
      {
        name: 'On-site QC',
        body: 'AQL 2.5 inline and pre-shipment inspections — pieces counted, measurements taken against the approved sample, defects photographed — reported before you release the final payment.',
      },
    ],
    office_heading: 'Office & physical operations',
    office_lines: [
      'Location: Guangzhou, Guangdong, China, inside the core textile clusters (Zhongda fabric, Shisanhang ready-made).',
      'Working hours: China time (UTC+8), Monday–Saturday.',
      'Payment gate: deposit on PO approval; final balance only after a passed pre-shipment inspection report.',
      'We do not take commissions from factories on your unit price, and we do not sell you to a broker.',
    ],
    author_role: 'Founder, Shun Sourcing',
    author_bio: 'Runs the Guangzhou desk: market rounds, factory visits, inline and pre-shipment inspections.',
    cta: 'Send the product, target landed price and quantity',
  },
  ru: {
    meta_title: 'О нас — офис закупок и контроля качества в Гуанчжоу',
    meta_description:
      'Shun Sourcing — независимый офис закупок одежды и QC в Гуанчжоу: обход рынков, текпак, проверка фабрик, NNN, приёмка по AQL 2.5.',
    h1: 'Кто мы',
    who_heading: 'Офис',
    who: 'Shun Sourcing — независимый офис закупок и контроля качества одежды, работающий на месте в Гуанчжоу (Китай). Мы представляем overseas-покупателя — бренды, оптовиков и DTC-продавцов — как сторона в Китае, которая находит фабрику, контролирует образец и принимает партию до выплаты остатка.',
    services_heading: 'Что мы реально делаем',
    services: [
      {
        name: 'Закупки на рынках',
        body: 'Ежедневный обход Shisanhang (十三行), Zhanxi (站西), Shahe (沙河) и тканевого рынка Zhongda (中大面料市场). Цену даёт точка или CMT-мастерская, у которой ткань есть сейчас, а не фото из листинга.',
      },
      {
        name: 'Текпак и образцы',
        body: 'Превращаем эскизы покупателя в производственный текпак: таблица замеров с допусками, спецификация ткани и фурнитуры, плотность GSM, размерный ряд, согласование lab-dip и strike-off.',
      },
      {
        name: 'Проверка фабрик и NNN',
        body: 'Отбираем CMT-производства, сверяем бизнес-лицензию с реестром КНР и подписываем NNN-соглашение, исполнимое по праву КНР, до того как пойдут деньги на оснастку и ткань.',
      },
      {
        name: 'Приёмка на месте',
        body: 'Инлайн-инспекция и приёмка перед отгрузкой по AQL 2.5: пересчёт штук, замеры по утверждённому образцу, фото дефектов — отчёт до-release остатка платежа.',
      },
    ],
    office_heading: 'Офис и физическая работа',
    office_lines: [
      'Локация: Гуанчжоу, провинция Гуандун, Китай, в контуре текстильных кластеров (тканевой Zhongda, готовое Shisanhang).',
      'Рабочее время: китайское время (UTC+8), понедельник–суббота.',
      'Условия оплаты: задаток по утверждённому PO; остаток — только после подписанного акта приёмки перед отгрузкой.',
      'Мы не берём комиссию с фабрики в вашу цену и не передаём вас брокеру.',
    ],
    author_role: 'Основатель Shun Sourcing',
    author_bio: 'Ведёт гуанчжоуский desk: обход рынков, визиты на фабрики, инлайн-приёмка и приёмка перед отгрузкой.',
    cta: 'Отправьте товар, целевую цену с доставкой и объём',
  },
  ar: {
    meta_title: 'من نحن — مكتب توريد وفحص ملابس في قوانغتشو',
    meta_description:
      'Shun Sourcing مكتب توريد ملابس وفحص جودة مستقل في قوانغتشو: جولات الأسواق، ملفات المواصفات، تدقيق المصانع، اتفاقية NNN، وفحص AQL 2.5.',
    h1: 'من نحن',
    who_heading: 'المكتب',
    who: 'Shun Sourcing مكتب مستقل لشراء الملابس وفحص جودتها، مقره في قوانغتشو، الصين، ويعمل على أرض الواقع. نمثّل المشترين من خارج الصين — العلامات التجارية وتجار الجملة ومتاجر البيع المباشر — كناحية المتواجدة في الصين التي تختار المصنع وتضبط العينة وتقبل البضاعة قبل دفع الرصيد.',
    services_heading: 'ما نقوم به فعلاً',
    services: [
      {
        name: 'التوريد من الأسواق',
        body: 'جولات يومية في Shisanhang (十三行) و Zhanxi (站西) و Shahe (沙河) وسوق أقمشة Zhongda (中大面料市场). السعر يأتي من البسطة أو ورشة CMT التي تملك القماش الآن، لا من صورة إعلان.',
      },
      {
        name: 'ملف المواصفات والعينة',
        body: 'تحويل رسوماتك إلى ملف إنتاج جاهز: جدول القياسات مع التفاوهات، مواصفات القماش والإكسسوارات، وزن GSM، مجموعة المقاسات، واعتماد lab-dip و strike-off.',
      },
      {
        name: 'تدقيق المصانع واتفاقية NNN',
        body: 'فرز مصانع CMT (قص وحياكة وخياطة)، والتحقق من الرخصة التجارية في سجلات الصين، وتوقيع اتفاقية NNN قابلة للتنفيذ وفق القانون الصيني قبل دفع تكلفة القالب أو القماش.',
      },
      {
        name: 'الفحص في الموقع',
        body: 'فحص أثناء الإنتاج وفحص قبل الشحن وفق AQL 2.5: عدّ القطع، قياسها مقابل العينة المعتمدة، وتصوير العيوب — والتقرير قبل تحرير الدفعة الأخيرة.',
      },
    ],
    office_heading: 'المكتب والعمل الميداني',
    office_lines: [
      'الموقع: قوانغتشو، مقاطعة غوانغدونغ، الصين، داخل تجمع المنسوجات (أقمشة Zhongda وجاهز Shisanhang).',
      'ساعات العمل: توقيت الصين (UTC+8)، الاثنين–السبت.',
      'شرط الدفع: عربون عند اعتماد أمر الشراء؛ الرصيد النهائي فقط بعد تقرير فحص قبل الشحن ناجح.',
      'لا عمولات من المصنع داخل سعرك، ولا نحوّل حسابك إلى وسيط آخر.',
    ],
    author_role: 'مؤسس Shun Sourcing',
    author_bio: 'يدير مكتب قوانغتشو: جولات الأسواق، زيارة المصانع، الفحص أثناء الإنتاج وقبل الشحن.',
    cta: 'أرسل المنتج والسعر المستهدف شامل التوصيل والكمية',
  },
};

/** Entity labels for JSON-LD: stable English across all languages. */
export const ABOUT_EN: AboutContent = ABOUT.en;
