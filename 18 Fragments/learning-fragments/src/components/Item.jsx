import React from "react";
import styles from "./Item.module.css";
const Item = ({ foodItems, bought, handleBuyButton, buttonBackground }) => {
  // console.log(styles);
  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        style={{ backgroundColor: buttonBackground }}
        className={`btn btn-info ${styles.button}`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
