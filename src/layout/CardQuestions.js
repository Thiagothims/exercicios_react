import styles from "./CardQuestions.module.css";

import { Link } from "react-router-dom";

function CardQuestions({ id, number, subject, statement, img }) {
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
