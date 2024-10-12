import styles from "./loadscreen.module.css";
function LoadScreen() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Carregando...</p>
    </div>
  );
}

export default LoadScreen;
