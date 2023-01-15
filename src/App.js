import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["app"]}>
      {process.env.REACT_APP_HEADER_ENABLED === "true" && (
        <span className={styles["app__top-text"]}>acol.dev is offline</span>
      )}

      <div className={styles["app__body"]}>
        <h1 className={styles["app__title"]}>(╯°□°）╯︵ ┻━┻</h1>
        <h3 className={styles["app__subtitle"]}>
          {process.env.REACT_APP_BODY_TEXT || "*table flip noises*"}
        </h3>
      </div>

      {process.env.REACT_APP_FOOTER_ENABLED === "true" && (
        <span className={styles["app__bottom-text"]}>We'll be back soon</span>
      )}
    </div>
  );
}

export default App;
