import React from "react";
//CSS module approach
import sytle from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={sytle.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
