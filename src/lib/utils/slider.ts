import styles from '../../styles/ProductCardSlider.module.css';


export const btnpressprev = () => {
  let box = document.querySelector(`.${styles.productContainer}`);
  let width = box.clientWidth;
  box.scrollTo({
    left: box.scrollLeft - width,
    behavior: 'smooth',
  });
  console.log(width);
};

export const btnpressnext = () => {
  let box = document.querySelector(`.${styles.productContainer}`);
  let width = box.clientWidth;
  box.scrollTo({
    left: box.scrollLeft + width,
    behavior: 'smooth',
  });
  console.log(width);
};

