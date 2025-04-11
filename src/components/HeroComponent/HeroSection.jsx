import React from 'react'
import styles from "./herosection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.context}>
        <p className={styles.title}>Let Us Find Your <span>Forever Food</span></p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa veniam dignissimos in facere. Tenetur alias quam optio debitis aspernatur?</p>
        <div className={styles.buttonContainer}>
          <button>Search Now</button>
          <button>Know More</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection