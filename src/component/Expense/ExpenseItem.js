///Note- Its stateless component as there is no state here means no state variable is defined here.
import "./ExpenseItem.css";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props) {
  // const [title, setValue] = useState(props.title);
  // function stateChange() {
  //   setValue("updated");
  //   console.log("clicked");
  // }
  return (
    <Card className="expense-item">
      {/* <div >{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={stateChange}>change title</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
