import Banner from "components/Banner";
import image from "images/banner-home.png";
import Title from "components/Title";
import MainBody from "components/MainBody";
import videos from "json/db.json";
import Card from "components/Card";
import styles from "./home.module.css";

export default function Home() {
  return (
    <MainBody>
      <Banner image={image} />
      <Title>Um lugar para guardar seus vídeos e filmes!</Title>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card key={video.id} item={video} />
        ))}
      </section>
    </MainBody>
  );
}
