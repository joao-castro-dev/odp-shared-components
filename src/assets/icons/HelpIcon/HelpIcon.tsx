import { FC } from "react";
import { IconProps } from "../../../components/Icons/IconsTypes";

const HelpIcon: FC<IconProps> = ({ color, width, height, className }) => {
  return (
    <svg
      width={width ? width : "32"}
      height={height ? height : "32"}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      className={className}
    >
      <path
        d="M15.777 27.004L11 31.685c-.622.655-1.725.215-1.725-.689l.035-3.992H1a1 1 0 01-1-1V4.016a1 1 0 011-1h30a1 1 0 011 1v21.988a1 1 0 01-1 1H15.777zm14.223-2V5.016H2v19.988h8.31a1 1 0 011 1v2.516l3.313-3.205a1 1 0 01.725-.311H30zM11 15c0 .83-.67 1.5-1.5 1.5S8 15.83 8 15s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm13 0c0 .83-.67 1.5-1.5 1.5S21 15.83 21 15s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-6.5 0a1.5 1.5 0 11-1.5-1.5c.83 0 1.5.67 1.5 1.5z"
        fill={color ? color : "#fff"}
      ></path>
    </svg>
  );
};

export { HelpIcon };
