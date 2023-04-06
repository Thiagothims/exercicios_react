import Container from '../layout/Container'
import style from './Exercicios.module.css'

function Exercicios({ id, exercise, statement, img }) {

  return(
      <Container>
        <div className={style.item}>
          <h1>
            Exercício {exercise}
          </h1>
          <h2>
            {statement}
          </h2>
          <img src={img} alt={`Exercício ${exercise}`}/>
        </div>        
        <div className={style.item}>
          <h1>
            Resposta:
          </h1>
          <p>
            resultado da resposta
          </p>
        </div>
      </Container>
  )
}

export default Exercicios
