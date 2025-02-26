import type { MenuData } from "../../CustomHeaderTypes";
import { ContactUsItem } from "../ContactUs/ContactUsTypes";

export interface MenuProps {
  menu: MenuData[];
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  logoAlt: string;
  logoSrc: string;
  contactUs: ContactUsItem[];
  onCloseMobileMenu(): void;
  onFocus(): void;
}
