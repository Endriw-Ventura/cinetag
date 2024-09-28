import image from "images/banner-player.png";
import Banner from "components/Banner";
import MainBody from "components/MainBody";
import Title from "components/Title";

export default function Player() {
  return (
    <MainBody>
      <Banner image={image} />
      <Title>Player</Title>
    </MainBody>
  );
}
