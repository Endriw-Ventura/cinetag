import styles from "./banner.module.css";

export default function Banner({ image }) {
  return (
    <div className={styles.container}>
      <img src={image} alt="banner.png" className={styles.banner} />
    </div>
  );
}
