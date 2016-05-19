"use strict";

import React from "react";
import ReactDOM from "react-dom";
import FilteredList from "./filteredList/index.jsx";
import AddItem from "./addItem/index.jsx";
import Table from "./table/index.jsx";

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      items: []
    };
  }

  addItems (item) {
    var items = this.state.items;
    item.archived = false;
    items.push(item);
    this.setState({
      items: items
    });
    console.log('state', this.state);
  }

  render () {
    return (
      <div className="app">
        <div class="row">
          <h4 class="twelve columns center-text">
            Add Todo
          </h4>
          <AddItem addItems={this.addItems.bind(this)}/>
        </div>
        <div class="row">
          <Table items={this.state.items}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('mount-point')
    );
