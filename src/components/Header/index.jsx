import styles from "./header.module.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt="logo.png" />
      <nav className={styles.container}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.h3} ${styles.selected}` : styles.h3
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.h3} ${styles.selected}` : styles.h3
          }
          to="/favorites"
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}
