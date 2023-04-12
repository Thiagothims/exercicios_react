import { useState, useEffect } from "react";

import styles from "./Response.module.css";
import { useParams } from "react-router-dom";

function Response() {
  const { id } = useParams();

  const [response, setResponse] = useState([]);
  const [showResponse, setShowResponse] = useState(true);

  //
  useEffect(() => {
    fetch(`http://localhost:5000/resolutions/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className={styles.response}>
        <h4>Resposta</h4>
        <p>{response.response}</p>
      </div>
      {/* <img src={response.img.url} alt={`imagem do código, resposta da questão ${response.number} - ${response.img.caption}`} /> */}
    </>
  );
}

export default Response;
