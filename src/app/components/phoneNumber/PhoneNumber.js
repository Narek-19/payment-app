import styles from "./style.module.css";

export const PhoneNumber = () => {
  return (
    <div className={styles.container}>
      <a href="tel:+1-847-555-5555" class={styles.cta}>
        <span> +1-847-555-5555</span>
      </a>
    </div>
  );
};
