// useState update the componenet whenever set function is called. For example:
//const [formIsValid, setFormIsValid] = useState(false);
//Whenever setFormIsValid is updated with value, component will re-render

//UseReducer----
//Use it when using useState become cumbersome and we are getting lot of bugs/unintended behaviour
//When there is mutiple state update. For eample look at below code-
// const passwordChangeHandler = (event) => {
//   setEnteredPassword(event.target.value);
//   setFormIsValid(event.target.value.length > 6 && emailState.isValid);
// };
//setFormIsValid  is updated when

//**********UseEffect                                 UseReducer */
// i) Main state mgmt tool                         i) Great if you need more power
// ii) Great for independent piece of state/data   ii) for related piece of state or data
///iii) state update r easy & limited to few kind  iii) for complex state update
/// of update

import React, { useState, useEffect, useReducer } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.includes("@") };

  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.includes("@") };

  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.length > 6 };

  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.length > 6 };

  return { value: "", isValid: false };
};
const Login = (props) => {
  // Below enteredEmail & emailIsValid is related state so they can be combined & useReducer
  // can be used

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const { isValid: passwordIsValid } = passwordState;
  const { isValid: emailIsValid } = emailState;
  useEffect(() => {
    //If we use setFormIsVaild outside useEffect then when this component render then setFormIsVaild update value
    // and again component re-render and happen again infinitely.

    const timeoutTimer = setTimeout(() => {
      console.log("inside");
      setFormIsValid(
        emailState.isValid && passwordState.isValid
        //enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 1000);
    return () => {
      console.log("outside");
      clearTimeout(timeoutTimer); //Return is called everytime after setFormIsValid is called execpt for the
      //first time. Check console.log to understand the mechanism
      //setTimeout is called to minimise the setFormIsValid call.
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    //setEnteredEmail(event.target.value);
    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    //setEnteredPassword(event.target.value);
    setFormIsValid(event.target.value.length > 6 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
    //setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
