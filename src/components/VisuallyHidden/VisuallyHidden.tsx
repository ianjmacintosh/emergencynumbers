import styles from "./VisuallyHidden.module.css";

function VisuallyHidden({ children }) {
  return <span className={styles.visuallyHidden}>{children}</span>;
}

export default VisuallyHidden;
