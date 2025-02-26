import { FC, useState } from "react";

import { RegionBar, IconButton, Link, NavbarButtons } from "@faststore/ui";

import ContactUs from "../ContactUs";

import { HeaderNavbarButtonsProps } from "./HeaderNavbarButtonsTypes";
import styles from "./HeaderNavbarButtons.module.scss";
import SearchButtonMobile from "../SearchButtonMobile";
import { LoginButton } from "../LoginButton";
import Icons from "../../../Icons";

const HeaderNavbarButtons: FC<HeaderNavbarButtonsProps> = ({
  region,
  navButtons,
  loginButton,
  contactUs,
  isMobile,
  currency,
  locale,
  handleProductLink,
  handleInitSearchState,
  handleFormatSearchState,
  handleSendAnalytics,
  handleFormatSearchPath,
  topSearchData,
  cart,
  session,
  handleOpenModal,
  handleToggleCart,
  handleGetSuggestions,
  handleAddToSearchHistory,
  searchHistoryData,
  handleClearSearchHistory,
}) => {
  const [showChatDropdown, setShowChatDropdown] = useState(false);

  return (
    <NavbarButtons
      data-fs-navbuttons
      className={styles.navbarButtons}
      searchExpanded={false}
      data-testid="header-navbar-buttons"
    >
      {isMobile && (
        <SearchButtonMobile
          currency={currency}
          locale={locale}
          handleProductLink={handleProductLink}
          handleInitSearchState={handleInitSearchState}
          handleFormatSearchState={handleFormatSearchState}
          handleSendAnalytics={handleSendAnalytics}
          topSearchData={topSearchData}
          handleFormatSearchPath={handleFormatSearchPath}
          handleGetSuggestions={handleGetSuggestions}
          handleAddToSearchHistory={handleAddToSearchHistory}
          searchHistoryData={searchHistoryData}
          handleClearSearchHistory={handleClearSearchHistory}
        />
      )}

      {navButtons && navButtons.length > 0 && (
        <>
          {navButtons.map((item, index) => (
            <Link
              data-fs-navbuttons-item-link
              key={index}
              href={item.href}
              title={item.title}
              className={styles.navButtons__item}
              data-testid={`header-navbar-buttons-button-${index}`}
            >
              <img
                data-fs-navbuttons-item-image
                src={item.icon}
                height={22}
                data-testid={`header-navbar-buttons-button-${index}-image`}
              />
            </Link>
          ))}
        </>
      )}

      {region?.enabled && (
        <RegionBar
          data-fs-regionbar
          label="Set your location"
          editLabel="Delivery: "
          postalCode={session.postalCode}
          className={styles.mainHeader__regionBar}
          onButtonClick={() => handleOpenModal()}
          data-testid="header-navbar-buttons-region-bar"
        />
      )}

      <div
        data-fs-navbuttons-item-contact
        className={`${styles.navButtons__item} ${styles.navButtons__item__contact} ${styles.navButtons__item__relative}`}
        onMouseEnter={() => setShowChatDropdown(!showChatDropdown)}
        onMouseLeave={() => setShowChatDropdown(!showChatDropdown)}
        data-testid="header-navbar-buttons-contactUs-wrapper"
      >
        <Icons
          icon="help"
          data-fs-navbuttons-item-contact-icon
          data-icon="help"
          className={styles.navButtons__item__contactIcon}
          data-testid="header-navbar-buttons-contactUs-icon"
        />
        <span
          data-fs-navbuttons-item-text
          data-fs-navbuttons-item-contact-text
          className={`${styles.navButtons__item__text} ${styles.navButtons__item__contactLabel}`}
          data-testid="header-navbar-buttons-contactUs-title"
        >
          Contact
        </span>

        {showChatDropdown && (
          <ContactUs
            variation={"desktop"}
            data-testid="header-navbar-buttons-contactUs"
            contactUs={contactUs}
          />
        )}
      </div>

      <IconButton
        data-fs-cart-toggle
        aria-label="cart"
        data-testid="header-navbar-buttons-cart"
        icon={
          <Icons
            icon="bag"
            data-fs-cart-toggle-icon
            width={25}
            height={25}
            className={styles.navButtons__item__cartIcon}
          />
        }
        className={`${styles.navButtons__item} ${styles.navButtons__item__itemCart}`}
        iconPosition="right"
        onClick={() => {
          handleToggleCart();
        }}
      >
        <span
          data-fs-cartqty
          className={styles.cartQty}
          data-testid="header-navbar-buttons-cart-total"
        >
          {cart.totalItems}
        </span>
      </IconButton>

      <LoginButton
        loginData={loginButton}
        person={session.person}
        isMobile={isMobile}
      />
    </NavbarButtons>
  );
};

export { HeaderNavbarButtons };
