
import React from "react";

export default class Todone extends React.Component {
  handleCheck (e) {
  }

  render () {
    return (
    <tr className="strike">
       <td>
         <input type="checkbox" checked="true"/>
       </td>
       <td>
        {this.props.item.title}
       </td>
       <td>
        {this.props.item.description}
       </td>
       <td>
        {this.props.item.time}
       </td>
       <td>
         <button class="button-primary">delete</button>
       </td>
    </tr>
    );
  }
}
