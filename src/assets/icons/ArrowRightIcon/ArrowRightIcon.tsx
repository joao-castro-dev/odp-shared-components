import { FC } from "react";
import { IconProps } from "../../../components/Icons/IconsTypes";

const ArrowRightIcon: FC<IconProps> = ({ color, width, height, className }) => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 32 32"
      width={width ? width : "32"}
      height={height ? height : "32"}
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <title>Icon/Action/Chevron-Right</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9394 12.0001L8.46973 6.53039L9.53039 5.46973L16.0607 12.0001L9.53039 18.5304L8.46973 17.4697L13.9394 12.0001Z"
        fill={color ? color : "#080341"}
      />
    </svg>
  );
};

export { ArrowRightIcon };
