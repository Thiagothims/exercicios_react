import styles from "./NavBar.module.css";
import { BsHouseFill } from "react-icons/bs";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.home} to="/">
        <BsHouseFill />
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/questions"> Questões </Link>
        </li>
        <li className={styles.item}>
          <Link to="/about"> Sobre o Projeto </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
