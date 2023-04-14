import { Link } from "react-router-dom";

import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Exercicios de React</h1>
      <div className={styles.text}>
        <p>
          Esta aplicação tem como objetivo demonstrar um pouco do aprendizado de
          React.js obitido na trilha de aprendizagem do programa de estágio da
          Soft Expert. Apresentando a resolução dos exercícios.
        </p>
        <p>
          A resolução da lista de exercícios foi realizada utilizando como base
          para o aprendizado videos e a documentação oficial do React,
          disponivel em Learn React
        </p>
        <div className={styles.btn}>
          <Link to={"/questions"}>
            <button>Vá para as questões!</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
