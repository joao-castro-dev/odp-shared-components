import { FC } from "react";
import { IconProps } from "../../../components/Icons/IconsTypes";

const SandwichIcon: FC<IconProps> = ({ color, width, height, className }) => {
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
        d="M4 6H20M4 12H20M4 18H20"
        stroke={color ? color : "#fff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { SandwichIcon };
