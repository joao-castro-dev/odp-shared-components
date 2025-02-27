export type ShippingSimulation = {
  logisticsInfo: Array<{
    slas: Array<{
      carrier: string | null;
      price: number | null;
      shippingEstimate: string | null;
      localizedEstimates: string | null;
      availableDeliveryWindows: Array<{
        startDateUtc: string | null;
        endDateUtc: string | null;
        price: number | null;
        listPrice: number | null;
      } | null> | null;
    } | null> | null;
  } | null> | null;
  address: {
    city: string | null;
    neighborhood: string | null;
    state: string | null;
  } | null;
};

export type CustomShippingSimulationProps = {
  quantity: number;
  availability: string;
  shippingSimulation: ShippingSimulation;
  outOfStockMessage?: string;
  notRegionalizedMessage?: string;
};
