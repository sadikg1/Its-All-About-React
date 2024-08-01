import styles from "./FoodInput.module.css";
const FoodInput = ({handleOnKeyDown}) => {
  
  return (
    <input
      type="text"
      className={`${styles.input} form-control`}
      placeholder="Enter Food Item Here"
      onKeyDown={handleOnKeyDown}
    ></input>
  );
};
export default FoodInput;
