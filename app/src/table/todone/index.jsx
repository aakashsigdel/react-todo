
import React from "react";

export default class Todone extends React.Component {
  handleCheck (i) {
    console.log('clicked', i);
    this.props.toggleCheck(i);
  }

  render () {
    return (
    <tr className="strike">
       <td>
         <input type="checkbox" checked="true" onClick={this.handleCheck.bind(this, this.props.item)}/>
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
