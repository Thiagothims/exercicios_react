import styles from "./Resolution.module.css";

import resp01 from "../images/ex1_resp.png";

function Resolution01() {
  return (
    <div className={styles.resolution}>
      <h2>Resolução</h2>
      <p>
        A má prática neste código e efetuar a atribuição diretamente utilizando
        o ‘this’. A melhor forma para atribuir atualizações ao state é
        utilizando o escopo funcional.
      </p>
      <div>
        <img src={resp01} alt="resposta da questão 1" />
      </div>
    </div>
  );
}

export default Resolution01;
