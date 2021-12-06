import style from "./Error.module.css";
import Button from "./Button";
import Card from "./Card";
import React from "react";
import reactDom from "react-dom";
const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onError}></div>;
};
const Modal = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onError}>Ok</Button>
      </footer>
    </Card>
  );
};
const Error = function (props) {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Backdrop onError={props.onError} />,
        document.getElementById("backdrop-root")
      )}
      {/* <div className={style.backdrop} onClick={props.onError}></div> */}
      {reactDom.createPortal(
        <Modal
          message={props.message}
          title={props.title}
          onError={props.onError}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Error;
