import React from "react";
import "./style.scss";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
}

interface ButtonInterface {
  label: string;
  onClick?: any;
  submitButton?: boolean;
  type: ButtonType;
}

const Button: React.FC<ButtonInterface> = ({
  label,
  onClick,
  type,
  submitButton,
}) => {
  return (
    <button
      className={`Button ${type}`}
      onClick={onClick}
      type={submitButton ? "submit" : "button"}
    >
      {label}
    </button>
  );
};

export default Button;
