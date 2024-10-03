import Banner from "components/Banner";
import image from "images/banner-favoritos.png";
import MainBody from "components/MainBody";
import Title from "components/Title";
import { useFavorites } from "hooks/useFavorites";
import Card from "components/Card";
import styles from "./favorites.module.css";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <MainBody>
      <Banner image={image} />
      <Title>Meus favoritos</Title>
      {favorites.length > 0 ? (
        <section className={styles.container}>
          {favorites.map((favorite) => (
            <Card key={favorite.id} item={favorite} />
          ))}
        </section>
      ) : (
        <Title>~Sem Favoritos~</Title>
      )}
    </MainBody>
  );
}
