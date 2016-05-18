"use strict";

import React from 'react';
import List from '../list.jsx';

export default class FilteredList extends React.Component {

  constructor () {
    super();
    this.state = {
      initialItems: [
        'apples',
        'oranges',
        'oran',
        'app'
      ]
    }
  }

  render () {
    return (
    <div className="filtered-List">
      <input type="text" onChange={this.filterList.bind(this)}/>
      <List items={this.state.items}/>
    </div>
        )
  }

  filterList (event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter( function (o) {
      return o.toLowerCase().search(
      event.target.value.toLowerCase()
          ) !== -1;
    });
    this.setState({
      items: updatedList
    });
  }

  componentWillMount () {
    this.setState({
      items: this.state.initialItems
    })
  }
}

