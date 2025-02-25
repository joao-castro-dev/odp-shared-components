import { FC } from "react";
import { IconProps } from "../../../components/Icons/IconsTypes";

const ArrowLeftIcon: FC<IconProps> = ({ color, width, height, className }) => {
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
        d="M15 6L9 12L15 18"
        stroke={color ? color : "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ArrowLeftIcon };
