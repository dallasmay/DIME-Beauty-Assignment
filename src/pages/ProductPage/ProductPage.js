import { useEffect, useState } from "react";
import Client from "shopify-buy";

import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const [productsArr, setProductsArr] = useState([])

  const client = Client.buildClient({
    domain: "dime-beauty-demo.myshopify.com",
    storefrontAccessToken: "df6fc859931d69c4b8a6d2fbb6ea2286",
  });

//   useEffect(() => {
//     client.product.fetchAll().then((products) => {
//       console.log(products);
//       setProductsArr(products)
//     });
//   }, []);

  return (
    <div className={styles["product-page"]}>
      <ProductCard />
    </div>
  );
};

export default ProductPage;
