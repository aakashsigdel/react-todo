import React from "react";
import Todo from "./todo/index.jsx";
import Todone from "./todone/index.jsx";

var items = [
  {
    title: "hello",
    description: "lots of things to do",
    time: "10:30am",
    archived: false
  },
  {
    title: "poop",
    description: "lots of poop to do",
    time: "11:30pm",
    archived: false
  },
  {
    title: "brush",
    description: "lots of brush to do",
    time: "1:30pm",
    archived: true
  },
  {
    title: "dance",
    description: "lots of dancing to do",
    time: "12:30pm",
    archived: true
  },
  {
    title: "cry",
    description: "lots of tears to do",
    time: "10:30pm",
    archived: false
  },
]

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
              return <Todo key={item.id} item={item} toggleCheck={this.props.toggleCheck.bind(this)}/>
            }, this)
          }
          {
            this.props.items.filter( function (item) {
              return item.archived;
            }).map( function (item, i) {
              console.log('items in map', item);
              return <Todone key={item.id} item={item} toggleCheck={this.toggleCheck}/>
            }, this)
          }
          </tbody>
        </table>
        );
  }
}

