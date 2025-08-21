import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClose: () => void;
}

const Alert = ({ children, color = "danger", onClose }: Props) => {
  return (
    <div className={"alert alert-dismissisble alert-" + color}>
      {children}{" "}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
