import React from 'react';

export default class extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="six columns">
          <label for="title">Title</label>
          <input className="u-full-width" type="text" placeholder="Input Title" id="title" name="title"/>
        </div>
        <div className="six columns">
          <label for="time">Time</label>
          <input className="u-full-width" type="text" placeholder="HH:MM am/pm" id="time" name="time"/>
        </div>
        <div className="twelve columns">
          <label for="description">Description</label>
          <textarea className="u-full-width" type="text" placeholder="Describe" id="description" name="description">
          </textarea>
        </div>
        <div className="twelve column no-margin">
          <hr className="u-full-width"/>
        </div>
      </div>
    )
  }
}

