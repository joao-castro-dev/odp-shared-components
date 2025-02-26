import { FC } from "react";

import { Link } from "@faststore/ui";

import { HeaderLogoProps } from "./HeaderLogoTypes";
import styles from "./HeaderLogo.module.scss";

const HeaderLogo: FC<HeaderLogoProps> = ({ url, title, src }) => {
  return (
    <Link
      data-fs-navbar-logo-link
      href={url}
      title={title}
      prefetch="false"
      className={styles.mainHeader__logo__link}
      data-testid="header-navbar-logo"
    >
      <img
        data-fs-navbar-logo-image
        src={src}
        alt={title}
        width={141}
        height={50}
        className={styles.mainHeader__logo__image}
        loading="eager"
        data-testid="header-navbar-logo-image"
      />
    </Link>
  );
};

export { HeaderLogo };
