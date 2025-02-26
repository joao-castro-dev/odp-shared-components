import { CustomProductQuantitySelectorProps } from "./CustomProductQuantitySelectorTypes";

import { Icon, BuyButton, QuantitySelector, Skeleton } from "@faststore/ui";

import { getCookie } from "../../../../utils/getCookie";

import styles from "./CustomProductQuantitySelector.module.scss";

export function CustomProductQuantitySelector({
  buyButtonTitle,
  isInCartButtonTitle,
  isInCartMessage,
  isValidating,
  setQuantity,
  useUnitMultiplier = false,
  isInCart,
  unitMultiplier,
  buyProps,
  sku,
  quantity,
  onInvalidQuantity,
}: CustomProductQuantitySelectorProps) {
  const handleRedirect = () => {
    const baseUrl = "/checkout";
    const params = new URLSearchParams({
      jsessionid: getCookie("jsessionid") ?? "",
      "cmd_addSKU.button.INDEX[0]": "Add%20to%20Cart",
      cmATCSourcePage: "Product%20Details%20Page",
      "entryFormList[0].cmMessage": "Product%20Details%20Page",
      "entryFormList[0].sku": sku,
      "entryFormList[0].qty": quantity.toString(),
    });

    const link = `${baseUrl};${params.toString()}`;

    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div data-fs-product-details-values-controls>
      <QuantitySelector
        min={1}
        max={10}
        onChange={setQuantity}
        unitMultiplier={useUnitMultiplier ? unitMultiplier ?? 1 : 1}
        useUnitMultiplier={useUnitMultiplier}
        onValidateBlur={(min: number, maxValue: number, quantity: number) => {
          onInvalidQuantity({
            title: "Invalid quantity!",
            message: `The quantity you entered is outside the range of ${min} to ${maxValue}. The quantity was set to ${quantity}.`,
            status: "INFO",
            icon: <Icon name="CircleWavyWarning" width={30} height={30} />,
          });
        }}
      />
      {isValidating ? (
        <Skeleton size={{ width: "100%", height: "48px" }} />
      ) : (
        <div data-fs-product-details-buy-button>
          {isInCart && (
            <p data-fs-product-details-is-in-cart>{isInCartMessage}</p>
          )}
          <div onClick={() => handleRedirect()}>
            <BuyButton
              className={isInCart ? styles.isInCart : ""}
              {...buyProps}
            >
              {isInCart ? isInCartButtonTitle : buyButtonTitle}
            </BuyButton>
          </div>
        </div>
      )}
    </div>
  );
}
