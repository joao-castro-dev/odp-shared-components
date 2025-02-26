import { FC } from "react";

import { IconProps } from "../../../components/Icons/IconsTypes";

const MenuArrowIcon: FC<IconProps> = ({ color, width, height, className }) => {
  return (
    <svg
      width={width ? width : "6"}
      height={height ? height : "10"}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 9L5 5L1 1"
        stroke={color ? color : "#8E8E8E"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { MenuArrowIcon };
