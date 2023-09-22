import styles from "./LoadingScreen.module.scss";

export const LoadingScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingScreen;
