import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "danger" | "secondary";
}

const Button = ({ children, onClick, color = "danger" }: Props) => {
  return (
    <button
      className={[styles.btn, styles.btnPrimary].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
