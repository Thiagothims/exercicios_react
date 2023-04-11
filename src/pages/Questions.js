import { useState, useEffect } from "react"

function Questions() {
  const [questions, setQuestions] = useState()

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
    <div>
      {questions.map((question) => (
          <h1 key={question.id}>{question.id}</h1>
        ))
      }
    </div>
  )
}

export default Questions
