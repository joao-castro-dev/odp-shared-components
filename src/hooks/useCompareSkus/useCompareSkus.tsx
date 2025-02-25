import { ComparisonSku } from "./useCompareSkusTypes";

const updateComparisonBar = (() => {
  const eventTarget = new EventTarget();

  const handleUpdate = () => {
    eventTarget.dispatchEvent(new Event("updateComparisonBar"));
  };

  const onUpdate = (callback: EventListener) => {
    eventTarget.addEventListener("updateComparisonBar", callback);
  };

  const removeUpdateListener = (callback: EventListener) => {
    eventTarget.removeEventListener("updateComparisonBar", callback);
  };

  return { handleUpdate, onUpdate, removeUpdateListener };
})();

const updateAllComparisonSkus = (skus: ComparisonSku[]): boolean => {
  try {
    sessionStorage.setItem("compareSkus", JSON.stringify(skus));
    updateComparisonBar.handleUpdate();
    return true;
  } catch (error) {
    console.error("Error updating comparison SKUs:", error);
    return false;
  }
};

const removeAllComparisonSkus = (): boolean => {
  try {
    sessionStorage.removeItem("compareSkus");
    updateComparisonBar.handleUpdate();
    return true;
  } catch (error) {
    console.error("Error removing comparison SKUs:", error);
    return false;
  }
};

const addComparisonSku = (newSku: ComparisonSku): boolean => {
  const skus = getAllComparisonSkus();

  skus.push(newSku);

  return updateAllComparisonSkus(skus);
};

const removeComparisonSku = (sku: string): boolean => {
  const skus = getAllComparisonSkus();
  const index = skus.findIndex((item) => item.sku === sku);

  if (index !== -1) {
    skus.splice(index, 1);
    return updateAllComparisonSkus(skus);
  }

  return false;
};

const getAllComparisonSkus = (): ComparisonSku[] => {
  return JSON.parse(sessionStorage.getItem("compareSkus") ?? "[]");
};

const getComparisonPageLink = (): string | null => {
  const skus = getAllComparisonSkus()
    .map((item) => item.sku)
    .join(",");

  if (!skus) {
    return null;
  }

  return `/catalog/compareAction.do?skus=${skus}`;
};

export {
  addComparisonSku,
  removeComparisonSku,
  getAllComparisonSkus,
  getComparisonPageLink,
  removeAllComparisonSkus,
  updateComparisonBar,
};
