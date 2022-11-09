import styles from "./button.module.css";

export interface IbuttonProps {
  title?: string;
  icon?: JSX.Element | null;
  action?: () => void;
  round?: boolean;
  invisible?: boolean;
  loading?: boolean;
  error?: boolean;
}

export default function Buttom({
  title = "",
  icon = null,
  round = false,
  action = () => {},
  invisible = false,
  loading = false,
  error = false,
}: IbuttonProps) {
  return (
    <button
      className={`${styles.wrapper} ${round && styles.round} ${
        error && styles.error
      } ${invisible && styles.invisible}`}
      onClick={!loading ? action : () => {}}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {title && <span className={styles.title}>{title}</span>}
    </button>
  );
}
