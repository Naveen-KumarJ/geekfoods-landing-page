import React from "react";
import styles from "./cardcomponent.module.css";
import houseImage from "../../assets/house.png";
function CardSection() {
  return (
    <section className={styles.cardSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={houseImage} alt="" />
        </div>
        <div className={styles.contextContainer}>
          <div className={styles.context}>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <button>Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardSection;
