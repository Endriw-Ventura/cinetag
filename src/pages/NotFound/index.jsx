import Title from "components/Title";
import styles from "./notfound.module.css";
import MainBody from "components/MainBody";

export default function NotFound() {
  return (
    <MainBody>
      <section className={styles.section}>
        <Title>Página não encontrada!</Title>
      </section>
    </MainBody>
  );
}
