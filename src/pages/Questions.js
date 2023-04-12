import { useState, useEffect } from "react"

import styles from './Questions.module.css'

import CardQuestions from "../layout/CardQuestions"

function Questions() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/questions', {
      method: 'GET',
      headers: {
        'Content-Type': 'aplication/json'
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setQuestions(data)
    })
    .catch((err) => console.log(err))
  }, [])


  return(
      <>
      <div className={styles.question}>
        <h1>Escolha uma questão</h1> 
      </div>
        {questions?.map((question) => (
          <CardQuestions
            id={question.id}
            number={question.number}
            subject={question.subject}
            statement={question.statement}
            img={question.img}
            key={question.id}
          />
          ))
        }
      </>
  )
}

export default Questions
