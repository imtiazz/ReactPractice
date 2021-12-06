import { useState } from "react";
import style from "./UserForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/Error";
import react from "react";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const userNameHandler = function (event) {
    setUserName(event.target.value);
  };
  const ageHandler = function (event) {
    setAge(event.target.value);
  };

  const addUserhandler = function (event) {
    event.preventDefault();
    if (!userName || !age) {
      setError({
        title: "Invalid Input",
        message: "Please try again!",
      });
      return;
    }
    //Handling invalid data
    const enteredData = {
      id: Math.random().toString(),
      name: userName,
      age: age,
    };

    //Passing the user input
    props.onInputData(enteredData);
    setUserName("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <react.Fragment>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onError={errorHandler}
        ></Error>
      )}

      <form onSubmit={addUserhandler}>
        {/* <div className={style["user-input"]}> */}
        <Card className={style["user-input"]}>
          <label>Username</label>
          <input type="text" onChange={userNameHandler} value={userName} />
          <label>Age (Years)</label>
          <input
            type="Number"
            min="0"
            max="150"
            step="1"
            onChange={ageHandler}
            value={age}
          />
          <Button type="submit">Add User</Button>

          {/* </div> */}
        </Card>
      </form>
    </react.Fragment>
  );
};

export default UserForm;
