import styles from "./About.module.css";

function About() {
  return (
    <>
      <header className={styles.header}>
        <h1>Sobre o Projeto</h1>
        <h2>O aprendizado com React JS</h2>
      </header>
      <article className={styles.article}>
        <p>Com o desenvolvimento do aprendizado em React houve momentos em que tive a sensação de não saber nada e momentos que tive convicção que a dificuldade forja o aprendizado constante. Apesar destas dificuldades, pude desenvolver dois pequenos projetos - este e um gerenciador de projetos (GPMatt) - nesta etapa da trilha de aprendizado do estágio, assim listei algumas dos desafios e aprendizados obtidos com o React.</p>
        <h4>Desafios e Aprendizados</h4>
        <ul>
          <li>
            <span>Criação de um layout objetivo, dinâmico e que aplicasse uma lógica de renderização: </span> importante desenvolvimento na utilização de CSS, além do desenvolvimento da lógica de renderização das questões com ajuda das referências do projeto GPMatt.
          </li>
          <li>
            <span>Arquitetura de pastas do projeto e estrutura dos componentes: </span> após assistir algumas aulas sobre a arquitetura de projetos React, entendi que há de existir um padrão utilizado pelo desenvolvedor e o engessamento deste padrão pode dificultar a utilização em projetos com objetivos diversos. Com isso usei referências do Diego da Rocketseat e do Matheus Battisti do canal Hora de Codar, para montar o projeto e entender que o dinamismo de projetos diferentes leva a algumas variações nos padrões de arquitetura do projeto.
          </li>
          <li>
            <span>Utilização do json server e fetch's: </span> A utilização do json server ajudou a entender a ponta do iceberg do relacionamento com API's e os fetch's aprendendo a fazer requests.
          </li>
          <li>
            <span>Dificuldade de compreender e instânciar imagens vindas de um objeto json (API 'fake'): </span> Algumas horas de aprendizado e um pouco de frustração por não conseguir renderizar imagens armazenadas no projetos, mas com caminhas (url) vindas da API 'fake'. Com ajuda do Jonas e dos lideres foi possível finalizar esta etapa.
          </li>
          <li>
            <span>Resolução dos exercícios que tratavam de class components: </span> A dificuldade na resolução dos exercícios que tratavam sobre problemas e má práticas relacionadas a class components veio no começo quando a diferença de sintaxe confundiu um pouco, porém após algumas aulas e entendimento do this e dos métodos de construção de classe, ficou um pouco mais legível e claro.
          </li>
          <li>
            <span>Resolução do exercício 3: </span> depois de passar 3 ou 4 dias analisando o exercício e tentando aplica-lo em um exemplo real, entendi os métodos componentDidMount, componentWillAmount e componentDidUpdate. A dificuldade ajudou a aprender mais do que o exercício questionava, na minha situação.
          </li>
          <p></p>
        </ul>
      </article>
    </>
  );
}

export default About;
