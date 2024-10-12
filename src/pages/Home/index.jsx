import Banner from "components/Banner";
import image from "images/banner-home.png";
import Title from "components/Title";
import MainBody from "components/MainBody";
import Card from "components/Card";
import styles from "./home.module.css";
import { useVideos } from "hooks/useVideos";
import NotFound from "pages/NotFound";
import LoadScreen from "components/LoadScreen";
import { useEffect } from "react";

export default function Home() {
  const { videos, loading, error, fetchData } = useVideos();
  const url =
    "https://my-json-server.typicode.com/Endriw-Ventura/cinetag-api/db";

  useEffect(() => {
    fetchData(url);
  }, []);

  if (loading) {
    return <LoadScreen />;
  }

  if (error) {
    return <NotFound />;
  }

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
