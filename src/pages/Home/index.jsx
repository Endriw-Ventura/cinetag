import Banner from "components/Banner";
import image from "images/banner-home.png";
import Title from "components/Title";
import MainBody from "components/MainBody";

export default function Home() {
  return (
    <MainBody>
      <Banner image={image} />
      <Title>Um lugar para guardar seus vídeos e filmes!</Title>
    </MainBody>
  );
}
