import React from "react";

export default class Todo extends React.Component {
  handleCheck (i) {
    console.log('in to deep', i);
    this.props.toggleCheck(i);
  }

  render () {
    return (
    <tr className="">
       <td>
         <input type="checkbox" onClick={this.handleCheck.bind(this, this.props.item)}/>
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
         <button class="button-primary" onClick="">delete</button>
       </td>
    </tr>
    );
  }
}
