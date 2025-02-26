export interface ContactUsItem {
  title: string;
  richText: string;
  buttonText: string;
  buttonLink: string;
}

export interface ContactUsProps {
  contactUs: ContactUsItem[];
  variation
}