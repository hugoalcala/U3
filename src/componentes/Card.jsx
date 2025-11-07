import styles from '../../src/assets/css/Card.module.css'; //

const Card = ({ titulo, paragrafo }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.paragrafo}>{paragrafo}</p>
    </div>
  );
};
export default Card ;