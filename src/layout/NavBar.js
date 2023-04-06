import styles from './NavBar.module.css'
import { 
  BsFill1SquareFill, 
  BsFill2SquareFill, 
  BsFill3SquareFill, 
  BsFill4SquareFill, 
  BsFill5SquareFill, 
  BsFill6SquareFill, 
  BsFill7SquareFill,
  BsHouseFill } from 'react-icons/bs'

import Container from "./Container";
import { Link } from 'react-router-dom'

function NavBar() {
  return(
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'> <BsHouseFill/> </Link>
          </li>
          <li className={styles.item}>
          <Link to='/question01'> <BsFill1SquareFill/> </Link>
          </li>
          <li className={styles.item}>
          <Link to='/question02'> <BsFill2SquareFill/> </Link>
          </li>
          <li className={styles.item}>
          <Link to='/question03'> <BsFill3SquareFill/> </Link>
          </li>
          <li className={styles.item}>
          <Link to='/question04'> <BsFill4SquareFill/> </Link>
          </li>
          <li className={styles.item}>
          <Link to='/question05'> <BsFill5SquareFill/> </Link>
          </li>
          <li className={styles.item}>
          <Link to='/question06'> <BsFill6SquareFill/> </Link>
          </li>
          <li className={styles.item}>
          <Link to='/question07'> <BsFill7SquareFill/> </Link>
          </li>

        </ul>
      </Container>
    </nav>
  )
}

export default NavBar
      