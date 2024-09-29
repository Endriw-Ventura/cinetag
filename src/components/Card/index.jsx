import styles from "./card.module.css";
import favoriteIcon from "images/favorite.png";
import favoriteOutlineIcon from "images/favorite_outline.png";

export default function Card({ item }) {
  return (
    <div className={styles.container}>
      <img src={item.capa} className={styles.cover} alt="cover.png" />
      <div className={styles.innerContainer}>
        <h4 className={styles.cardTitle}>{item.titulo}</h4>
        <img className={styles.icon} src={favoriteIcon} alt="icon.png" />
      </div>
    </div>
  );
}
