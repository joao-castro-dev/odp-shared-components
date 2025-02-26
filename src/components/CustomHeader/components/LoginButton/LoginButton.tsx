import styles from "./login.module.scss";
import React, { useState } from "react";
import { LoginButtonProps, LinksList } from "./LoginButtonTypes";
// REVIEW LATER
// import Image from "next/image";
import { Icon } from "@faststore/ui";
import LoggedButton from "./LoggedButton";
import RichText from "../../../RichText";

export default function LoginButton({
  person,
  loginData,
  isMobile,
}: LoginButtonProps) {
  const {
    mobileLogo,
    loginButton,
    loggedOptions,
    loginText,
    registerText,
    listLinks,
  } = loginData;

  const [openTab, setOpenTab] = useState<Boolean>(false);
  const handleMouseEnter = () => {
    if (!isMobile) {
      setOpenTab(true);
    }
  };
  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenTab(false);
    }
  };
  const handleClick = () => {
    if (isMobile) {
      setOpenTab(!openTab);
    }
  };

  return (
    <div
      className={`${styles.loginButton}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.loginButton__container}>
        {isMobile || person ? (
          <img
            className={styles.footerSocialMedia__icon}
            src={mobileLogo}
            alt="loginImage"
            width={28}
            height={28}
          />
        ) : (
          <>
            {loginButton.text}
            <div
              className={`${styles.loginButton__arrow} ${styles.loginOpen}`}
            />
          </>
        )}
      </div>
      {openTab && (
        <div className={styles.loginButton__dropdownContainer}>
          {person ? (
            <LoggedButton LoggedButtonProps={loggedOptions} />
          ) : (
            <>
              {isMobile && (
                <div className={styles.loginButton__closeTab}>
                  <div
                    className={styles.loginButton__closeIcon}
                    onClick={handleClick}
                  >
                    <Icon name="X" weight="bold" aria-label="close login tab" />
                  </div>
                </div>
              )}
              <div className={styles.loginButton__dropdownContainerText}>
                <RichText content={loginText} aria-label={loginText} />
              </div>
              <a href={loginButton.link} aria-label="link to login page">
                <div className={styles.loginButton__innerButton}>
                  {loginButton.text}
                </div>
              </a>
              <div className={styles.loginButton__registerText}>
                <RichText content={registerText} aria-label={loginText} />
              </div>
              <div className={styles.loginButton__listLinksContainer}>
                {listLinks.map((item: LinksList, index: number) => (
                  <a
                    href={item.link}
                    aria-label={`link to ${item.text}`}
                    key={index}
                  >
                    <div className={styles.loginButton__listLink}>
                      {item.text}
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
