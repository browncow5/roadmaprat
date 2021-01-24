import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
 
class Item extends Component {
  state = {
    listitems: [
      {
        id: 0,
        context: "Primary",
        modifier: "list-group-item list-group-item-primary"
      },
      {
        id: 1,
        context: "Secondary",
        modifier: "list-group-item list-group-item-secondary"
      },
      {
        id: 2,
        context: "Success",
        modifier: "list-group-item list-group-item-success"
      },
      {
        id: 3,
        context: "Danger",
        modifier: "list-group-item list-group-item-danger"
      },
      {
        id: 4,
        context: "Warning",
        modifier: "list-group-item list-group-item-warning"
      }
    ]
  };
 
  render() {
    return (
      <React.Fragment>
        <ul className="list-group">
          {this.state.listitems.map(listitem => (
            <li key={listitem.id} className={listitem.modifier}>
              {listitem.context}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Item></Item>
    </div>
  );
}

export default App;
