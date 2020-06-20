import React, { Component } from "react";
import "./App.css";
import TodoListItems from "./TodoListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes, faCalendarAlt);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.addTodoItem = this.addTodoItem.bind(this);
    this.toDohandleInput = this.toDohandleInput.bind(this);
    this.deleteToDoItem = this.deleteToDoItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addTodoItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  toDohandleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  deleteToDoItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <div className="todotext">
            Write your
            <br />
            <span>To do list</span>
          </div>

          <form id="form-to-do" onSubmit={this.addTodoItem}>
            <input
              type="text"
              placeholder="Enter your task"
              value={this.state.currentItem.text}
              onChange={this.toDohandleInput}
            ></input>
            <button className="submit-button" type="submit">
              Add
            </button>
            <button
              className="clear-button"
              type="submit"
              onClick={this.deleteToDoItem}
            >
              Clear
            </button>
          </form>
        </header>
        <div className="bottom">
          <p>{this.state.items.text}</p>

          <TodoListItems
            items={this.state.items}
            deleteToDoItem={this.deleteToDoItem}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
