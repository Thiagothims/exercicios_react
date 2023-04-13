import style from "./Container.module.css";

function Container({ children }) {
  return (
    <article className={style.container}>
      <div>{children}</div>
    </article>
  );
}

export default Container;
