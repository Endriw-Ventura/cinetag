import { useParams } from "react-router-dom";
import styles from "./videoPlayer.module.css";
import { useVideos } from "hooks/useVideos";

export default function VideoPlayer() {
  const params = useParams();
  const { videos } = useVideos();
  const video = videos.find((item) => item.id === Number(params.id));

  return (
    <section className={styles.container}>
      <iframe
        className={styles.player}
        src={video.link}
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
  );
}
