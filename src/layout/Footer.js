import { BsGithub, BsLinkedin } from "react-icons/bs";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li>
          <a href="https://github.com/Thiagothims" target="_blank">
            {" "}
            <BsGithub />{" "}
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thiagomattoss/" target="_blank">
            {" "}
            <BsLinkedin />{" "}
          </a>
        </li>
      </ul>
      <p className={styles.info}>
        Acesse os perfis nas redes sociais e saiba mais sobre o desenvolvedor
      </p>
      <p className={styles.copy}>
        Desenvolvido por Thiago M. Santos &copy;2023
      </p>
    </footer>
  );
}

export default Footer;
