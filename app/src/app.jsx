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
    item.id = items.length === 0 ? 0 : items[items.length-1].id + 1;
    item.archived = false;
    items.push(item);
    this.setState({
      items: items
    });
    console.log('items', this.state.items);
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

  deleteItem (item) {
    console.log('delete item', item);
    let items = this.state.items;
    let itemsNew = _.remove (items, function (o) {
      return o.id === item.id;
    });
    this.setState({
      items: items
    });
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
          <Table items={this.state.items} toggleCheck={this.toggleCheck.bind(this)} deleteItem={this.deleteItem.bind(this)}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('mount-point')
    );
