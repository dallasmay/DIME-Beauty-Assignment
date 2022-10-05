import { useEffect, useState } from "react";
import Client from "shopify-buy";

import ProductCard from "../../components/ProductCard/ProductCard";
import DiscountBar from "../../components/DiscountBar/DiscountBar";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const [productsArr, setProductsArr] = useState([]);
  const [checkoutId, setCheckoutId] = useState();
  const [bundlePrice, setBundlePrice] = useState(0);

  const client = Client.buildClient({
    domain: "dime-beauty-demo.myshopify.com",
    storefrontAccessToken: "df6fc859931d69c4b8a6d2fbb6ea2286",
  });

  useEffect(() => {
    client.product.fetchAll().then((products) => {
      setProductsArr(products);
    });
    client.checkout.create().then((checkout) => {
      setCheckoutId(checkout.id);
    });
  }, []);

  const addToBundlePrice = (amount) => {
    setBundlePrice((prevState) => {
      return prevState + amount;
    });
  };

  const addLineItemToCheckout = (id) => {
    const lineItemToAdd = {
      variantId: `${id}`,
      quantity: 1,
    };
    client.checkout.addLineItems(checkoutId, lineItemToAdd).then((checkout) => {
      if (checkout.subtotalPrice >= 100) {
        client.checkout
          .addDiscount(checkoutId, "add-100-save-10-percent")
          .then((checkout) => {});
      }
    });
  };

  return (
    <>
      <div className={styles["product-page-content"]}>
        <div className={styles["product-grid-container"]}>
          {productsArr.map((ele) => {
            return (
              <ProductCard
                title={ele.title}
                price={ele.variants[0].price}
                imgLink={ele.images[0].src}
                id={ele.variants[0].id}
                checkoutId={checkoutId}
                addToBundlePrice={addToBundlePrice}
                addLineItemToCheckout={addLineItemToCheckout}
                key={ele.id}
              />
            );
          })}
        </div>
      </div>
      <DiscountBar bundlePrice={bundlePrice} />
    </>
  );
};

export default ProductPage;
