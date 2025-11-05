import React from 'react';
import styles from '../../src/assets/css/Card.module.css'; //

const Card = ({ title, paragraph }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default Card;