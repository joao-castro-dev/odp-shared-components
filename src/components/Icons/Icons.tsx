import { FC } from "react";

import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";
import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import BagIcon from "../../assets/icons/BagIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import HelpIcon from "../../assets/icons/HelpIcon";
import MenuArrowIcon from "../../assets/icons/MenuArrowIcon";
import MyAccountIcon from "../../assets/icons/MyAccountIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import SandwichIcon from "../../assets/icons/SandwichIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import StoreLocatorIcon from "../../assets/icons/StoreLocatorIcon";

import { IconsProps } from "./IconsTypes";

const Icons: FC<IconsProps> = ({ icon, color, width, height, className }) => {
  switch (icon) {
    case "arrow-right":
      return (
        <ArrowRightIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "arrow-left":
      return (
        <ArrowLeftIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "arrow-down":
      return (
        <ArrowDownIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "help":
      return (
        <HelpIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "sandwich":
      return (
        <SandwichIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "store-locator":
      return (
        <StoreLocatorIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "my-account":
      return (
        <MyAccountIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "close":
      return (
        <CloseIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "bag":
      return (
        <BagIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "phone":
      return (
        <PhoneIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "menu-arrow":
      return (
        <MenuArrowIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
    case "search":
      return (
        <SearchIcon
          color={color}
          width={width}
          height={height}
          className={className}
        />
      );
  }
};

export { Icons };
