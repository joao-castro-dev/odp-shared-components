export type IconNames =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "bag"
  | "close"
  | "help"
  | "menu-arrow"
  | "my-account"
  | "phone"
  | "sandwich"
  | "search"
  | "store-locator";

export interface IconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

export interface IconsProps extends IconProps {
  icon: IconNames;
}
