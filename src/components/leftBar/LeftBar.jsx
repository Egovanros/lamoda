import React, { useEffect, useState, useCallback } from "react";
import styles from "./leftBar.module.scss";

const LeftBar = ({ items, name, type, onFilter }) => {
  const [objectItems, setObjectItems] = useState([]);

  useEffect(() => {
    setObjectItems(
      Array.from(items).map((item, id) => ({
        name: item,
        id: id,
        checked: false,
      }))
    );
  }, [items]);

  const handleCheckboxChange = useCallback((id) => {
    setObjectItems((newItems) =>
      newItems.map((item) =>
        id === item.id ? { ...item, checked: !item.checked } : item
      )
    );
  }, []);

  useEffect(() => {
    const activeCheckboxName = objectItems
      .filter((item) => item.checked)
      .map((item) => item.name);
    onFilter(
      name,
      activeCheckboxName.length
        ? (prod) => activeCheckboxName.includes(prod[type])
        : null
    );
  }, [objectItems, name, type, onFilter]);

  return (
    <div className={styles.inputs}>
      <div className={styles.inputs_item}>
        <div className={styles.inputs_item_name}>{name}</div>
        {objectItems.map((item, i) => (
          <div key={i}>
            <input
              type="checkbox"
              value={item.name}
              id={item.id}
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label htmlFor={item.id}> {item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
