import styles from "./DiscountBar.module.css";

const DiscountBar = () => {
  return (
    <div className={styles["discount-bar-container"]}>
      <div className={styles["discount-header"]}>Add $100 to save 10%</div>
      <div className={styles["discount-content-container"]}>
        <div className={styles["price-saving-flex-container"]}>
          <p className={styles["price-saving-text"]}>Bundle Price</p>
          <p className={styles["price-saving-text"]}>Your savings</p>
        </div>
        <div className={styles["price-saving-flex-container"]}>
          <p className={styles["price-saving-number"]}>$0</p>
          <p className={styles["price-saving-number"]}>$0</p>
        </div>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress-bar-filling"]}></div>
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