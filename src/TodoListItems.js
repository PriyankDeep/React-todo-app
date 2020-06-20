import React from "react";
import "./TodoListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function TodoListItems(props) {
  var tempDate = new Date();
  var date =
    tempDate.getFullYear() +
    "-" +
    (tempDate.getMonth() + 1) +
    "-" +
    tempDate.getDate() +
    " " +
    tempDate.getHours() +
    ":" +
    tempDate.getMinutes() +
    ":" +
    tempDate.getSeconds();
  const currDate = " - " + date;

  const items = props.items;
  const TodoListItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <FontAwesomeIcon className="faIcons-calendar" icon="calendar-alt" />
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <p className="date">{currDate}</p>
          </span>

          <span>
            <FontAwesomeIcon
              className="faIcons"
              onClick={() => {
                props.deleteToDoItem(item.key);
              }}
              icon="times"
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove
        staggerDelayBy={150}
        appearAnimation="accordionVertical"
        enterAnimation="fade"
        leaveAnimation="fade"
      >
        {TodoListItems}
      </FlipMove>
    </div>
  );
}

export default TodoListItems;
