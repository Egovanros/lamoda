import React from "react";
import styles from "./product.module.scss";
const Product = ({ product }) => {
  return (
    <div className={styles.container}>
      <img src={product.img} alt="" />
      <div><span>Имя </span>{product.name}</div>
      <div><span>Описание </span>{product.description}</div>
      <div><span>Категория </span>{product.category}</div>
      <div><span>Цвет </span>{product.color}</div>
      <div><span>Цена </span>{product.price}</div>
      <div><span>Рейтинг </span>{product.rating}</div>
    </div>
  );
};

export default Product;
