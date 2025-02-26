import { FC } from "react";
import { IconProps } from "../../../components/Icons/IconsTypes";

const CloseIcon: FC<IconProps> = ({ color, width, height, className }) => {
  return (
    <svg
      width={width ? width : "14"}
      height={height ? height : "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2934 12.3739L13.753 12.8335L12.8337 13.7528L12.3741 13.2932L7.00005 7.91909L1.6259 13.2932L1.16628 13.7529L0.24704 12.8336L0.706659 12.374L6.08081 6.99985L0.706854 1.6259L0.247234 1.16628L1.16647 0.24704L1.62609 0.706659L7.00005 6.08061L12.3739 0.706736L12.8335 0.247117L13.7528 1.16636L13.2932 1.62597L7.91929 6.99985L13.2934 12.3739Z"
        fill={color ? color : "#303030"}
      />
    </svg>
  );
};

export { CloseIcon };
