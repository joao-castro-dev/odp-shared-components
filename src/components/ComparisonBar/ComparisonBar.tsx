import React from "react";
import styles from "./ComparisonBar.module.scss";
import { Icon, Link, Rating, Button } from "@faststore/ui";
import {
  getAllComparisonSkus,
  getComparisonPageLink,
  removeAllComparisonSkus,
  removeComparisonSku,
  updateComparisonBar,
} from "../../hooks/useCompareSkus/useCompareSkus";
import { ComparisonBarProps } from "../../types/ComparisonBarTypes.d";
import { ComparisonSku } from "../../hooks/useCompareSkus/useCompareSkusTypes";

/**
 *
 * This component displays a comparison bar at the bottom of the page, allowing users to compare products.
 * It shows a list of products that the user has selected for comparison, with options to remove individual products
 * or clear all products from the comparison list. Users can also navigate to a comparison page to see detailed comparisons.
 * The component manages the comparison list state on the session storage with custom hooks.
 *
 * Props:
 * - helperText: string - Text to display as a helper message in the comparison bar.
 * - compareButtonText: string - Text to display on the compare button.
 * - removeButtonText: string - Text to display on the remove all button.
 * - imageComponent: React.ComponentType<ImageProps> - Image component to render product images.
 *
 * Updating the skus in the comparison bar with useComparisonBar hooks:
 * - addComparisonSku: Adds sku to the comparison list.
 * - removeComparisonSku: Removes sku from the comparison list.
 * - getAllComparisonSkus: Returns an array of ComparisonSku objects.
 * - getComparisonPageLink: Returns the link to the comparison page.
 * - removeAllComparisonSkus: Removes all skus from the comparison list.
 * - updateComparisonBar.handleUpdate(): Triggers the comparison bar to update it's content with the most recent session storage data.
 *
 * Dependencies:
 * - React
 * - Faststore/ui
 *
 * Note:
 * - This component uses CSS modules for styling and it does not render under 1024px.
 *
 * @version 0.1.0
 */

export default function ComparisonBar(props: ComparisonBarProps) {
  const { helperText, compareButtonText, removeButtonText, imageComponent: Image } = props;
  const [comparisonSkus, setComparisonSkus] = React.useState<ComparisonSku[]>(
    getAllComparisonSkus()
  );
  const [openSkuModal, setOpenSkuModal] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleUpdate = () => {
      const skus = getAllComparisonSkus();
      setComparisonSkus(skus);
    };

    updateComparisonBar.onUpdate(handleUpdate);

    return () => {
      updateComparisonBar.removeUpdateListener(handleUpdate);
    };
  }, []);

  if (comparisonSkus.length === 0) {
    return null;
  }

  const handleCompareButtonClick = () => {
    const link = getComparisonPageLink();

    if (link) {
      window.location.href = link;
    }
  };

  return (
    <aside className={styles.comparisonBar}>
      <div className={styles.comparisonBar__content}>
        <p data-fs-comparisonBar-text>{helperText}</p>

        {comparisonSkus.slice(0, 4).map((item) => (
          <div
            key={item.sku}
            data-fs-comparisonBar-item
            onMouseEnter={() => setOpenSkuModal(item.sku)}
            onMouseLeave={() => setOpenSkuModal(null)}
          >
            <Link href={item.link}>
              <Image
                src={item.image}
                alt={`Product ${item.sku}`}
                width={50}
                height={50}
                className={styles.comparisonBar__image}
              />
            </Link>

            <Button
              variant="tertiary"
              onClick={() => removeComparisonSku(item.sku)}
              icon={<Icon name="X" width={18} height={18} />}
            />

            {openSkuModal === item.sku && (
              <span data-fs-comparisonBar-modal>
                <Image
                  src={item.image}
                  alt={`Product ${item.sku}`}
                  width={65}
                  height={65}
                  className={styles.comparisonBar__image}
                />
                <div data-fs-comparisonBar-modal-content>
                  <Link href={item.link}>{item.title}</Link>
                  <p data-fs-modal-text>{`Item #${item.sku}`}</p>
                  <span data-fs-modal-rating>
                    <Rating value={item.rating} icon={<Icon name="Star" />} />
                    <p>{`(${item.rating})`}</p>
                  </span>
                </div>
              </span>
            )}
          </div>
        ))}

        <Button variant="primary" onClick={handleCompareButtonClick} disabled={comparisonSkus.length < 2}>
          {compareButtonText}
        </Button>
        <Button variant="tertiary" onClick={removeAllComparisonSkus}>
          {removeButtonText}
        </Button>
      </div>
    </aside>
  );
}
