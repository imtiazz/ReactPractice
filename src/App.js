import logo from "./logo.svg";
import "./App.css";
import UserForm from "./Component/UserForm/UserForm.js";
import UserData from "./Component/UserData/UserData";
import { useState } from "react/cjs/react.development";

function App() {
  //let userData = [];
  const [userData, setData] = useState([]);
  const inputDataHandler = (data) => {
    //console.log(data);
    setData((prevData) => [data, ...prevData]);
  };
  return (
    <div>
      <UserForm onInputData={inputDataHandler} />
      {userData.length > 0 ? <UserData userData={userData} /> : ""}
    </div>
  );
}

export default App;
