import styles from "./style.module.css";

export const PhoneNumber = () => {
  return (
    <div className={styles.container}>
      <a href="tel:+1-909-903-0009" class={styles.cta}>
        <span> +1-909-903-0009</span>
      </a>
    </div>
  );
};
