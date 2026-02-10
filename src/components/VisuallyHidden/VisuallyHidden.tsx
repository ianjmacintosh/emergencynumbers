import styles from "./VisuallyHidden.module.css";

function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return <span className={styles.visuallyHidden}>{children}</span>;
}

export default VisuallyHidden;
