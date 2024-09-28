import styles from "./mainbody.module.css";

export default function MainBody({ children }) {
  return <main className={styles.main}>{children}</main>;
}
