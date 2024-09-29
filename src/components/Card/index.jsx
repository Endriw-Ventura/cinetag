import { useFavorites } from "hooks/useFavorites";
import styles from "./card.module.css";
import favoriteIcon from "images/favorite.png";
import favoriteOutlineIcon from "images/favorite_outline.png";

export default function Card({ item }) {
  const { favorites, changeFavorite } = useFavorites();
  const isFavorite = favorites.some((favorite) => favorite.id === item.id);
  return (
    <div className={styles.container}>
      <img src={item.capa} className={styles.cover} alt="cover.png" />
      <div className={styles.innerContainer}>
        <h4 className={styles.cardTitle}>{item.titulo}</h4>
        <button className={styles.button} onClick={() => changeFavorite(item)}>
          <img
            className={styles.icon}
            src={isFavorite ? favoriteIcon : favoriteOutlineIcon}
            alt="icon.png"
          />
        </button>
      </div>
    </div>
  );
}
