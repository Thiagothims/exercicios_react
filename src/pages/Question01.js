import styles from "./Question.module.css";
import ex01 from "../images/ex1.png";
import Resolution01 from "../resolution/Resolution01";

import { useState } from "react";

function Exercicio01() {
  const [showResolution, setShowResolution] = useState(false);

  function toggleShowResolution() {
    setShowResolution(!showResolution);
  }

  return (
    <section className={styles.questions}>
      <div>
        <h1>Questão 1</h1>
        <p>
          Qual a má prática no código abaixo e como melhorar este trecho de
          código?
        </p>
        <div>
          <img src={ex01} alt="questão 1" className={styles.img}/>
        </div>
      </div>

      <button onClick={toggleShowResolution} className={styles.btn}>
        {!showResolution ? "Ocultar Resolução" : "Mostrar Resolução"}
      </button>

      {!showResolution ? <Resolution01 /> : ""}
    </section>
  );
}

export default Exercicio01;
