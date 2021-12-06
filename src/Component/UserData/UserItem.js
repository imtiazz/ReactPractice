import style from "./UserItem.module.css";
const UserItem = function (props) {
  return (
    <div className={style["User-Item"]}>
      {props.name} ({props.age} years old)
    </div>
  );
};

export default UserItem;
