import style from "./Userdata.module.css";
import UserItem from "./UserItem.js";
import Card from "../UI/Card";

const UserData = function (props) {
  return (
    <Card>
      {/* <div className={style["User-Data"]}> */}
      {props.userData.map((item) => (
        <UserItem key={item.id} name={item.name} age={item.age}></UserItem>
      ))}
      {/* </div> */}
    </Card>
  );
};

export default UserData;
