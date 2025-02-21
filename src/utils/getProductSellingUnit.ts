import { productPageSpecification } from "../types/productSpecification";

function getProductSellingUnit(
  productPageSpecifications: productPageSpecification[]
): string {
  for (const spec of productPageSpecifications) {
    for (const specification of spec.specifications) {
      if (specification.name === "Sell UOM") {
        return specification.values[0].val;
      }
    }
  }

  return "ea";
}

export default getProductSellingUnit;
