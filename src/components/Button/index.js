import React from "react";
import style from "./button.module.css";

function Button({ title, btn, color, onClick, toggle, target }) {
  return (
    <div>
      <button
        className={`${style[btn]} ${style[color]}`}
        onClick={onClick}
        data-toggle={toggle}
        data-target={target}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
