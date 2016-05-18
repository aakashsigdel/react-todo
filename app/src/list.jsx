"use strict";

import React from 'react';

export default class List extends React.Component {
  render() {
    return (
      <ul>
      {
        this.props.items.map( function (o) {
          return <li key={o}> {o} </li>
        })
      }
      </ul>
        )
  }
}

export default List;

