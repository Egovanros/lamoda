import React, { useEffect, useMemo, useState, useCallback } from "react";
import Header from "./components/header/Header";
import LeftBar from "./components/leftBar/LeftBar";
import Product from "./components/product/Product";
import styles from "./App.module.scss";
import { generateProducts } from "./utils/generate";
import { SORTING } from "./utils/Sort";

const App = () => {
  const products = useMemo(() => generateProducts(), []);
  const [filtersType, setFiltersType] = useState([]);

  const [sortType, setSortType] = useState("sortRatingDESC");
  const handleSortProduct = (e) => {
    setSortType(e.target.name);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((prod) =>
      filtersType.every((filter) => filter.fn(prod))
    );
  }, [filtersType]);

  const sortedProducts = useMemo(() => {
    return filteredProducts.toSorted(SORTING[sortType]);
  }, [sortType, filteredProducts]);

  const handleFilterChange = useCallback((key, fn) => {
    setFiltersType((filters) => {
      if (fn) {
        return [...filters.filter((x) => x.key !== key), { key, fn }];
      } else {
        return filters.filter((x) => x.key !== key);
      }
    });
  }, []);

  const colors = useMemo(
    () => [...new Set(products.map((x) => x.color))],
    [products]
  );
  const categories = useMemo(
    () => [...new Set(products.map((x) => x.category))],
    [products]
  );

  return (
    <div className={styles.container}>
      <Header
        checked={sortType}
        onSort={handleSortProduct}
        onInputChange={handleFilterChange}
      />
      <div className={styles.container_wrapper}>
        <div className={styles.container_wrapper_leftbar}>
          <LeftBar
            items={colors}
            name={"Цвет"}
            type={"color"}
            onFilter={handleFilterChange}
          />
          <LeftBar
            items={categories}
            name={"Категория"}
            type={"category"}
            onFilter={handleFilterChange}
          />
        </div>

        <div className={styles.products}>
          {sortedProducts.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
