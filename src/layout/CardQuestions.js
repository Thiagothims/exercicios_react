import { Link } from "react-router-dom";

import styles from "./CardQuestions.module.css";

function CardQuestions({ id, number, subject }) {
  return (
    <Link to={`/question/${id}`} className={styles.card}>
      <div>
        <h3>Questão {number}</h3>
        <p>{subject}</p>
      </div>
    </Link>
  );
}

export default CardQuestions;
