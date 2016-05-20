"use strict";

import React from "react";
import ReactDOM from "react-dom";
import FilteredList from "./filteredList/index.jsx";
import AddItem from "./addItem/index.jsx";
import Table from "./table/index.jsx";
import _ from "../../node_modules/lodash";

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      items: []
    };
  }

  addItems (item) {
    item = item || {};
    var items = this.state.items;
    item.id = items.length;
    item.archived = false;
    items.push(item);
    this.setState({
      items: items
    });
  }

  toggleCheck (item) {
    console.log('items toggle', this.state.items)
    let items = this.state.items;
    item.archived=!item.archived;
    let index = _.findIndex (items, function (o) {
      return o.id === item.id;
    });
    items[index] = item;
    this.setState({
      items: items
    })
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
          <Table items={this.state.items} toggleCheck={this.toggleCheck.bind(this)}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('mount-point')
    );
