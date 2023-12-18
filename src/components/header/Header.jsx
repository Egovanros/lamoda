import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";

const Header = ({ onSort, checked, onInputChange }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    onInputChange(
      "по поиску",
      value.trim()
        ? (prod) =>
            prod.name.toLowerCase().includes(value.toLowerCase()) ||
            prod.description.toLowerCase().includes(value.toLowerCase())
        : null
    );
  }, [value, onInputChange]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_btn}>
        <input
          type="radio"
          name="sortPriceASC"
          id="1111"
          onChange={onSort}
          checked={"sortPriceASC" === checked}
        />
        <label htmlFor="1111">Сначала дешевые</label>
        <input
          type="radio"
          name="sortPriceDESC"
          id="2222"
          onChange={onSort}
          checked={"sortPriceDESC" === checked}
        />
        <label htmlFor="2222">Сначала дорогие</label>
        <input
          type="radio"
          name="sortRatingDESC"
          id="3333"
          onChange={onSort}
          checked={"sortRatingDESC" === checked}
        />
        <label htmlFor="3333">Сначала популярные</label>
      </div>
      <div className={styles.container_search}>
        <input type="text" onChange={handleInputChange} value={value} />
      </div>
    </div>
  );
};

export default Header;
