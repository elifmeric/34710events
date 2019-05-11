// CommentListContainer.js
import React from "react";
import Events from "../events/Events";

class EventsContainer extends React.Component {
  constructor() {
    super();
    this.state = { events: [] }
  }
  
  componentDidMount() {
    fetch("./events.json")
      .then(res => res.json())
      .then(events => this.setState({ events }))
  }
  
  render() {
    return <Events events={this.state.events} />;
  }
}

export default EventsContainer;