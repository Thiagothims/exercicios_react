import { useState, useEffect } from "react";

import styles from "./Questions.module.css";

import Loading from "../layout/Loading";
import CardQuestions from "../layout/CardQuestions";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://db-json-exreact.vercel.app/questions", {
        method: "GET",
        headers: {
          "Content-Type": "aplication/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setQuestions(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 400);
  }, []);

  return (
    <div className={styles.questions}>
      <div className={styles.questions_h1}>
        <h1>Escolha uma questão</h1>
      </div>

      <div className={styles.question_card}>
        {questions?.map((question) => (
          <CardQuestions
            id={question.id}
            number={question.number}
            subject={question.subject}
            statement={question.statement}
            img={question.img}
            key={question.id}
          />
        ))}
        {!removeLoading && <Loading />}
      </div>
    </div>
  );
}

export default Questions;
