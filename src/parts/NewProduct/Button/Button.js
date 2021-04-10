import React from "react";
import style from "./button.module.css";

function Button({ title, btn, onClick, name, value }) {
  return (
    <div>
      <button
        className={`${style[btn]}`}
        onClick={onClick}
        value={value}
        name={name}
      >
        {title}
      </button>
    </div>
  );
}

Button.defaultProps = {
  value: "",
  name: "",
  onClick: () => null,
};

export default Button;
