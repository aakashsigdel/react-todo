import React from 'react';

export default class extends React.Component {

  handleTitleChange (e) {
    console.log(this.state);
    this.setState ({
      title: e.target.value
    });
  }

  handleTimeChange (e) {
    console.log(this.state);
    this.setState ({
      time: e.target.value
    });
  }

  handleDescriptionChange (e) {
    console.log(this.state);
    this.setState ({
      description: e.target.value
    })
  }

  submit () {
    console.log(this.props.addItems);
    this.props.addItems(this.state);
    // console.log(this.state);
  }

  render () {
    return (
      <div className="row">
        <div className="six columns">
          <label for="title">Title</label>
          <input className="u-full-width" type="text" placeholder="Input Title" id="title" name="title" onChange={this.handleTitleChange.bind(this)}/>
        </div>
        <div className="six columns">
          <label for="time">Time</label>
          <input className="u-full-width" type="text" placeholder="HH:MM am/pm" id="time" name="time" onChange={this.handleTimeChange.bind(this)}/>
        </div>
        <div className="twelve columns">
          <label for="description">Description</label>
          <textarea className="u-full-width" type="text" placeholder="Describe" id="description" name="description" onChange={this.handleDescriptionChange.bind(this)}>
          </textarea>
        </div>
        <div className="two columns no-padding no-margin">
          <input type="submit" 
          onClick={this.submit.bind(this)}
          />
        </div>
        <div className="twelve columns no-margin">
          <hr className="u-full-width"/>
        </div>
      </div>
    )
  }
}

