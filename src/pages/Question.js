import styles from "./Question.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Response from "../response/Response";

function Question() {
  const { id } = useParams();

  const [question, setQuestion] = useState();
  const [showResponse, setShowResponse] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/questions/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setQuestion(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function toggleRespose() {
    setShowResponse(!showResponse);
  }

  return (
    <>
      {question && (
        <div className={styles.question}>
          <div>
            <h3>Questão {question.number}</h3>
            <p>{question.statement}</p>
          </div>
          <div className={styles.code}>
            <img
              src={question.img.url}
              alt={`imagem do código, questão ${question.number} - ${question.img.caption}`}
            />
          </div>
        </div>
      )}

      <div className={styles.btn_container}>
        <div className={styles.border}></div>
        <button onClick={toggleRespose} className={styles.btn}>
          {!showResponse ? "Ocultar Resposta" : "Mostrar Resposta"}
        </button>
      </div>

      {!showResponse && (
        <div>
          <Response />
        </div>
      )}
    </>
  );
}

export default Question;
