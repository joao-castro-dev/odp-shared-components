import React from "react";
import styles from "./CustomShippingSimulation.module.scss";
import { CustomShippingSimulationProps } from "../../../../types/CustomShippingSimulation";

/**
 *
 * This component displays the current available shipping options.
 *
 * Props:
 *
 * All required props and should be provided by the PDPContext from the usePDP hook.
 * - quantity: string - quantity of itens in stock, extended from ClientProduct.
 * - availability: string - string containing stock availability info from VTEX.
 * - shippingSimulation: ShippingSimulation - useShippingSimulation_unstable result from usePDP info.
 * - outOfStockMessage?: string - message to be displayed when product is out of stock. Default is null component.
 * - notRegionalizedMessage?: string - message to be displayed when user has not set location. Default is "Please set your location to see shipping options".
 *
 *
 * Dependencies:
 * - React
 * - Faststore/ui
 * - Faststore/core
 *
 * @version 0.1.0
 */

export default function CustomShippingSimulation(
  props: CustomShippingSimulationProps
) {
  const {
    quantity,
    availability,
    shippingSimulation,
    outOfStockMessage,
    notRegionalizedMessage = "Please set your location to see shipping options",
  } = props;
  const outOfStock = React.useMemo(
    () => availability !== "https://schema.org/InStock",
    [availability]
  );

  const hasShippingOptions = !!shippingSimulation?.logisticsInfo?.length;

  if (outOfStock) {
    return outOfStockMessage ? (
      <section className={styles.shippingSimulationSection}>
        <p data-fs-no-stock-text>{outOfStockMessage}</p>
      </section>
    ) : null;
  }

  return (
    <section className={styles.shippingSimulationSection}>
      {hasShippingOptions ? (
        shippingSimulation?.logisticsInfo?.map((logisticInfo, i) => {
          return (
            <div data-fs-zipcode-wrapper key={i}>
              {logisticInfo?.slas?.map((sla) => (
                <div>
                  <p data-fs-zipcode-title>{sla?.carrier ?? ""}</p>
                  <p data-fs-zipcode-estimate>
                    {sla?.localizedEstimates ?? ""}
                  </p>
                  <p data-fs-zipcode-quantity>{quantity ?? 0}</p>
                </div>
              ))}
            </div>
          );
        })
      ) : (
        <p data-fs-no-zipcode-text>{notRegionalizedMessage}</p>
      )}
    </section>
  );
}
