import { useRouter } from "next/router";
import styles from "../../styles/ProductDetails.module.css";
import Image from "next/image";
import React, { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { useRef } from "react";
import addToCartFn from "../../lib/utils/addToCart";
import cartQuantityState from "../../store/atoms/cart";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/atoms/user";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const setCartQuantity = useSetRecoilState(cartQuantityState);
  const [addToCart, setAddToCart] = useState(false);
  const user = useRecoilValue(userState);
  

  const inputQuantity = useRef();

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}//products/${id}`)
        .then((res) => res.json())
        .then((product) => setProduct(product));
    }
  }, [id]);

  console.log(product);

  if (!product) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      </div>
    );
  }
  const makePayment = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);
    const body = {
      product: [
        {
          name: product.name,
          price: product.price,
          quantity: inputQuantity.current.value,
          productId: product._id,
        },
      ],
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  let description = product.description;
  let sentences = description.split(".");

  return (
    <div>
      {addToCart && <div class="notification">✅ Added to Cart </div>}
      <div className={styles.productDetailsParentContainer}>
        <div className={styles.productThumbnailContainer}>
          <Image
            className={styles.thumbnail}
            src={product.thumbnail}
            alt="product image"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productNamePrice}>
            <p className={styles.category}>Category: {product.category}</p>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.price}>${product.price}</p>
            <div>
              {sentences.map((sentence) => (
                <p className={styles.description}>{sentence}.</p>
              ))}
            </div>
          </div>
          <div className={styles.quantityAddToCartContainer}>
            <div className={styles.productQuantityContainer}>
              <input
                ref={inputQuantity}
                type="number"
                className={styles.productQuantity}
                defaultValue={1}
                min={1}
              />
            </div>

            {user.user ? (
              <button
                className={styles.btn}
                onClick={() => {
                  addToCartFn(
                    id,
                    product.price,
                    setCartQuantity,
                    setAddToCart,
                    +inputQuantity.current.value
                  );
                }}
              >
                Add To Cart
              </button>
            ) : (
              <p>Login to add this product to cart!</p>
            )}
          </div>
          {user.user ? (
            <button
              className={styles.buyBtn}
              onClick={() => {
                makePayment();
              }}
            >
              Quick Buy
            </button>
          ) : null}
        </div>
      </div>
      {/* <div className={styles.productDescription}>
        <div className={styles.specificationContainer}>
          <p>Specifications</p>
          <div>
            <p>Brand</p>
            <p>Type</p>
          </div>
          <div>
            <p>Technical Specs</p>
          </div>
          <div>
            <p>Design And Durability</p>
          </div>
          <div className={styles.specificationContainer}></div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetails;
