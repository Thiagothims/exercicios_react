import styles from './Footer.module.css'
import { BsGithub,  } from 'react-icons/bs';

function Footer() {
  return(
    <footer className={styles.footer}>
      <ul className={styles.social}>
        <li><BsGithub/></li>
      </ul>
      
    </footer>
  )
}

export default Footer
