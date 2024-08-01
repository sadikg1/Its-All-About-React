import styles from './Button.module.css'
const Button = () => {
  return (
    <div className={styles.div}>
      <button type="button" className={`${styles.button} btn btn-secondary btn-lg`}>
        Click Me To See Image
      </button>
    </div>
  );
};
export default Button;
