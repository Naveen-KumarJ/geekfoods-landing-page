import React from "react";
import profilePic from "../../assets/profile-pic.png";
import styles from "./testimonialcard.module.css";

function TestimonialCard({ detail }) {
  return (
    <div className={styles.card}>
      <div className={styles.review}>{detail.review}</div>
      <div className={styles.info}>
        <div style={{ width: "42px", aspectRatio: "1", borderRadius: "50%" }}>
          <img
            src={profilePic}
            alt="profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className={styles.personalDetail}>
          <span>{detail.name}</span>
          <span>{detail.occupation}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
