import reviewStar from "../../svg/reviewStar.svg"

import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles["prod-img-container"]}>
        <img
          className={styles["prod-img"]}
          src="https://cdn.shopify.com/s/files/1/0675/1184/5078/products/Probiotic-Gel-Cream-Tan-Listing_900x900_crop_center_076480d1-e491-4aa1-8893-aa75d0ec4146.jpg?v=1664558400"
        />
      </div>
      {/* <h1 style={{ margin: 0, backgroundColor: "grey" }}>test</h1> */}
      {/* <div className={styles.test}></div> */}
      <div className={styles["desc-container"]}>
        <h2 className={styles["prod-title"]}>Probiotic Gel Cream</h2>
        <div className={styles["review-container"]}>
          
            <img src={reviewStar} />
            <img src={reviewStar} />
            <img src={reviewStar} />
            <img src={reviewStar} />
            <img src={reviewStar} />

          <p className={styles["review-link"]}>7 Reviews</p>
        </div>
        <p className={styles.price}>$40</p>
        <button className={styles["add-btn"]}>Add to Bundle</button>
      </div>
    </div>
  );
};

export default ProductCard;
