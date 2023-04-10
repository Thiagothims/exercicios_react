import styles from './Footer.module.css'
import { BsGithub, BsInstagram, BsLinkedin  } from 'react-icons/bs';

function Footer() {
  return(
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li>
          <BsGithub/>
        </li>
        <li>
          <BsInstagram/>
        </li>
        <li>
          <BsLinkedin/>
        </li>
      </ul>
      <p className={styles.info}>Acesse os perfis nas redes sociais e saiba mais sobre o desenvolvedor</p>
      <p className={styles.copy}>App desenvolvido por Thiago M. Santos &copy;2023</p>
      

    </footer>
  )
}

export default Footer
