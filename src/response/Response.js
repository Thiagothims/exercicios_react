import { useState, useEffect } from "react";

import styles from "./Response.module.css";

import { useParams } from "react-router-dom";

function Response() {
  const { id } = useParams();

  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/resolutions/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setResponse(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (response.length === 0) {
    return null;
  }

  return (
    <>
      {response.img.url !== null ? (
        <div className={styles.response_container}>
          <div className={styles.response}>
            <h4>Resposta</h4>
            <p>{response.response}</p>
          </div>
          <div className={styles.code}>
            <img
              src={response.img.url}
              alt={`imagem do código, resposta da questão ${response.number} - ${response.img.caption}`}
            />
          </div>
        </div>
      ) : (
        <div className={styles.response}>
          <h4>Resposta</h4>
          <p>{response.response}</p>
        </div>
      )}
    </>
  );
}

export default Response;
