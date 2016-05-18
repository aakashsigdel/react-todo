"use strict";

import React from "react";
import ReactDOM from "react-dom";
import FilteredList from "./filteredList/index.jsx";
import AddItem from "./addItem/index.jsx"

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <div class="row">
          <h1 class="twelve columns center-text">
            Add Todo
          </h1>
          <AddItem/>
        </div>
        <div class="row">
          <FilteredList/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('mount-point')
    );
