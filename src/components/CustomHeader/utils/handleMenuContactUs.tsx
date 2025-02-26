import { MenuData } from "../CustomHeaderTypes";

export function handleMenuContactUs(menuData: MenuData[]): MenuData[] {
  const newMenu = [
    ...menuData,
    {
      submenu: [{ submenuThirdLevel: [], href: "#", title: "Submenu" }],
      title: "Contact Us",
      href: "#",
      custom: true
    },
  ];
  return newMenu;
}
