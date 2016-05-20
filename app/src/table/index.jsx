import React from "react";
import Todo from "./todo/index.jsx";
import Todone from "./todone/index.jsx";

export default class Table extends React.Component {
  constructor() {
    super ();
  }

  render () {
    return (
        <table className="u-full-width">
          <thead>
            <tr>
              <th> Done </th>
              <th> Name </th>
              <th> Description </th>
              <th> Time </th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.items.filter( function (item) {
              return !item.archived;
            }).map( function (item, i) {
              console.log('items in map', item);
              return <Todo 
                key={item.id} 
                item={item} 
                toggleCheck={this.props.toggleCheck.bind(this)}
                deleteItem={this.props.deleteItem.bind(this)}
              />
            }, this)
          }
          {
            this.props.items.filter( function (item) {
              return item.archived;
            }).map( function (item, i) {
              console.log('items in map', item);
              return <Todone 
                key={item.id} 
                item={item} 
                toggleCheck={this.props.toggleCheck.bind(this)}
              />
            }, this)
          }
          </tbody>
        </table>
        );
  }
}

