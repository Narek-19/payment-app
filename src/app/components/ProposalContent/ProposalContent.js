import styles from "./style.module.css";

export const ProposalContent = () => {
  return (
    <>
      <div className={styles.section}>
        <p>
        Get expert online support to find the right digital solutions!
        </p>
        <div className={styles.name}>
          <div>Name</div>
          <input name="name" />
        </div>
        <div className={styles.lName}>
          <div>Last Name</div>
          <input name="lName" />
        </div>
        <div className={styles.email}>
          <div>Email</div>
          <input name="email" />
        </div>
      </div>
      <div className={styles.btnContainer}>
      <button className={styles.sbmBtn}>
            Send
      </button>
      </div>
     
    </>
  );
};
