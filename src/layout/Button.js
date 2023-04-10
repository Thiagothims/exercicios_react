import styles from './Button.module.css'

function Button({ to, textBtn}) {
  return(
    <button className={styles.btn} to={to}> 
      {textBtn}
    </button>
  )
}

export default Button
