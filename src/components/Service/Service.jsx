import React from "react";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.card1}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id
          facere fugit aspernatur sit accusantium, ab temporibus excepturi
          repellendus, possimus quibusdam fuga nihil distinctio tempora ipsam
          non, quasi laboriosam consectetur?
        </p>
        <button className={styles.button}>Find Pair</button>
      </div>
      <div className={`${styles.card} ${styles.card2}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id
          facere fugit aspernatur sit accusantium, ab temporibus excepturi
          repellendus, possimus quibusdam fuga nihil distinctio tempora ipsam
          non, quasi laboriosam consectetur?
        </p>
        <button className={styles.button}>Plan my Wedding</button>
      </div>
    </div>
  );
};

export default Service;
