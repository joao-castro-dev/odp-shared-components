import { FC } from "react";
import { IconProps } from "../../../components/Icons/IconsTypes";

const BagIcon: FC<IconProps> = ({ color, width, height, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "60.5"}
      height={height ? height : "52"}
      viewBox="0 0 60.5 52"
      role="presentation"
      className={className}
    >
      <circle
        fill="none"
        stroke={color ? color : "#ffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        cx="12.125"
        cy="46.875"
        r="4"
      ></circle>
      <circle
        fill="none"
        stroke=""
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        cx="39.125"
        cy="46.875"
        r="4"
      ></circle>
      <path
        fill="none"
        stroke={color ? color : "#ffff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M59.125.875h-8.826l-10.174 42h-28"
      ></path>
      <path
        fill="none"
        stroke={color ? color : "#fff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M41.125 38.875H8.69l-7.565-24h45.782"
      ></path>
    </svg>
  );
};

export { BagIcon };
