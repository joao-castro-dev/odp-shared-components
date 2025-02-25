import { FC } from "react";
import { IconProps } from "../../../components/Icons/IconsTypes";

const ArrowDownIcon: FC<IconProps> = ({ color, width, height, className }) => {
  return (
    <svg
      width={width ? width : "32"}
      height={height ? height : "32"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17 9.5L12 14.5L7 9.5"
        stroke={color ? color : "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ArrowDownIcon };
