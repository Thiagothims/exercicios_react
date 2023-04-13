import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Question.module.css";

import Response from "../response/Response";
import Loading from "../layout/Loading";

function Question() {
  const { id } = useParams();

  const [question, setQuestion] = useState();
  const [showResponse, setShowResponse] = useState(true);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/questions/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setQuestion(data);
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err));
      }, 600)
  }, [id]);

  function toggleRespose() {
    setShowResponse(!showResponse);
  }

  return (
    <>{!removeLoading && <Loading />}
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
