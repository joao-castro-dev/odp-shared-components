import { FC } from "react";
import { IconProps } from "../../../components/Icons/IconsTypes";

const SearchIcon: FC<IconProps> = ({ color, width, height, className }) => {
  return (
    <svg
      width={width ? width : "16"}
      height={height ? height : "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.2253 10.1372L15.0874 14.9997"
        stroke={color ? color : "#143D8F"}
        strokeWidth="1.3"
        strokeMiterlimit="10"
      />
      <path
        d="M6.43978 11.7057C9.39608 11.7057 11.7926 9.30917 11.7926 6.35286C11.7926 3.39656 9.39608 1 6.43978 1C3.48347 1 1.08691 3.39656 1.08691 6.35286C1.08691 9.30917 3.48347 11.7057 6.43978 11.7057Z"
        stroke={color ? color : "#143D8F"}
        strokeWidth="1.3"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export { SearchIcon };
