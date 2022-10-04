import reviewStar from "../../svg/reviewStar.svg"

import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  const { title, price, imgLink } = props;

  return (
    <div className={styles.card}>
      <div className={styles["prod-img-container"]}>
        <img
          className={styles["prod-img"]}
          src={imgLink}
        />
      </div>
      {/* <h1 style={{ margin: 0, backgroundColor: "grey" }}>test</h1> */}
      {/* <div className={styles.test}></div> */}
      <div className={styles["desc-container"]}>
        <h2 className={styles["prod-title"]}>{title}</h2>
        <div className={styles["review-container"]}>
          
            <img src={reviewStar} />
            <img src={reviewStar} />
            <img src={reviewStar} />
            <img src={reviewStar} />
            <img src={reviewStar} />

          <p className={styles["review-link"]}>7 Reviews</p>
        </div>
        <p className={styles.price}>${price}</p>
        <button className={styles["add-btn"]}>Add to Bundle</button>
      </div>
    </div>
  );
};

export default ProductCard;
