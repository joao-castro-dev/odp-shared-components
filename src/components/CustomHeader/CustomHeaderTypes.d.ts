import { ContactUsItem } from "./components/ContactUs/ContactUsTypes";

// TopBarInfo

interface InfoTextArray {
  text: string;
  color: string;
}

interface TopBarInfo {
  infoText: InfoTextArray[];
  link: string;
  ico: string;
}

// NavButtons

interface NavButtons {
  title: string;
  icon: string;
  href: string;
}
interface LoginButtonProps {
  loginText: string;
  loginButton: {
    link: string;
    text: string;
  };
  registerText: string;
  listLinks: LinksList[];
  mobileLogo: string;
  loggedOptions: LinksList[];
}
interface LinksList {
  link: string;
  text: string;
}
//Menu

interface MenuDataSharedProps {
  href: string;
  title: string;
}

export interface SubMenuFourthLevel extends MenuDataSharedProps {}

export interface SubMenuThirdLevelData extends MenuDataSharedProps {
  headTitle: boolean;
  submenuFourthLevel: SubMenuFourthLevel[];
}

export interface SubMenuData extends MenuDataSharedProps {
  submenuThirdLevel: SubMenuThirdLevelData[][];
}

export interface MenuData extends MenuDataSharedProps {
  submenu: SubMenuData[];
  custom?: boolean;
}

export interface CustomHeaderProps {
  navbar: OverrideNavigationProps["searchInput"];
  cart: OverrideNavigationProps["cartIcon"];
  logoLink: {
    text: string;
    url: string;
  };
  logo: {
    alt: string;
    src: string;
    link: {
      url: string;
      title: string;
    };
  };
  topbar: topBarInfo[];
  region: {
    enabled: boolean;
  };
  navButtons: NavButtons[];
  menu: MenuData[];
  contactUs: ContactUsItem[];
  loginButton: LoginButtonProps;
  isMobile: boolean;
  menuData: UnformattedMenuItemsQuery;
  currency: Currency;
  locale: string;
  handleProductLink: (
    product: any,
    selectedOffer: number,
    index: number
  ) => { href: any; onClick: any; baseLinkProps: any };
}

//Mega Menu
export interface UnformattedMenuItemProps {
  id: string;
  parentId: string | null;
  type: string;
  position: number;
  title: string;
  children?: UnformattedMenuItemProps[] | null;
  blocks?: UnformattedMenuItemProps[] | null;
  url?: string | null;
  imageUrl?: string | null;
  altText?: string | null;
  ctaText?: string | null;
}

export interface UnformattedMenuItemsQuery {
  menuItems: UnformattedMenuItemProps[];
}

export interface MenuFormattingProps extends MenuDataSharedProps {
  parentId: string;
  position: number;
  sublevel: MenuFormattingProps[];
}

export interface FormattingSubMenuThirdLevelData extends MenuDataSharedProps {
  headTitle: boolean;
  submenuFourthLevel: (SubMenuFourthLevel & MenuFormattingProps)[];
}

export interface FormattingSubMenuData extends MenuDataSharedProps {
  submenuThirdLevel: (FormattingSubMenuThirdLevelData &
    MenuFormattingProps)[][];
}

export interface FormattingMenuData extends MenuFormattingProps {
  submenu: (FormattingSubMenuData & MenuFormattingProps)[];
  custom?: boolean;
}
