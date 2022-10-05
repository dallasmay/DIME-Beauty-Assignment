import styles from "./DiscountBar.module.css";

const DiscountBar = ({ bundlePrice }) => {
  return (
    <div className={styles["discount-bar-container"]}>
      <div className={styles["discount-header"]}>Add $100 to save 10%</div>
      <div className={styles["discount-content-container"]}>
        <div className={styles["price-saving-flex-container"]}>
          <p className={styles["price-saving-text"]}>Bundle Price</p>
          <p className={styles["price-saving-text"]}>Your savings</p>
        </div>
        <div className={styles["price-saving-flex-container"]}>
          <p className={styles["price-saving-number"]}>${bundlePrice}</p>
          <p className={styles["price-saving-number"]}>
            $
            {bundlePrice >= 100 && bundlePrice < 130
              ? (Math.round(100 * (bundlePrice * 0.1)) / 100).toFixed(2)
              : bundlePrice >= 130 && bundlePrice < 160
              ? (Math.round(100 * (bundlePrice * 0.15)) / 100).toFixed(2)
              : bundlePrice >= 160 && bundlePrice < 190
              ? (Math.round(100 * (bundlePrice * 0.2)) / 100).toFixed(2)
              : bundlePrice >= 190
              ? (Math.round(100 * (bundlePrice * 0.25)) / 100).toFixed(2)
              : 0}
          </p>
        </div>
        <div className={styles["progress-bar"]}>
          <div
            className={styles["progress-bar-filling"]}
            style={{ width: `${(bundlePrice / 190) * 100}%` }}
          ></div>
          <div className={styles["progress-line-flex-container"]}>
            <p className={styles["progress-line"]}>|</p>
            <p className={styles["progress-line"]}>|</p>
            <p className={styles["progress-line"]}>|</p>
            <p className={styles["progress-line"]}>|</p>
          </div>
        </div>
        <div className={styles["percentages-flex-container"]}>
          <p className={styles["percentages"]}>10%</p>
          <p className={styles["percentages"]}>15%</p>
          <p className={styles["percentages"]}>20%</p>
          <p className={styles["percentages"]}>25%</p>
        </div>
      </div>
    </div>
  );
}

export default DiscountBar;