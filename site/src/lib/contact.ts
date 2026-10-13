import { UI } from '../config/ui';
import { INQUIRY_EMAIL, OFFICE, WHATSAPP_DISPLAY, whatsappUrl, type Lang } from '../config/site';

export interface ContactRow {
  label: string;
  value: string;
  href: string | null;
}

/** The only contact facts published by the site. A row with no configured value is dropped, never faked. */
export function contactRows(lang: Lang): ContactRow[] {
  const ui = UI[lang];
  const email = INQUIRY_EMAIL.trim();
  return [
    { label: ui.contact_office, value: `${OFFICE.locality}, ${OFFICE.region}, ${OFFICE.country}`, href: null },
    { label: ui.contact_whatsapp, value: WHATSAPP_DISPLAY, href: whatsappUrl(ui.whatsapp_prefill) },
    ...(email ? [{ label: ui.contact_email, value: email, href: `mailto:${email}` } as ContactRow] : []),
  ];
}
