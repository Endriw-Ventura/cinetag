import Banner from "components/Banner";
import image from "images/banner-favoritos.png";
import MainBody from "components/MainBody";
import Title from "components/Title";

export default function Favorites() {
  return (
    <MainBody>
      <Banner image={image} />
      <Title>Meus favoritos</Title>
    </MainBody>
  );
}
