import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	date: new Date()
    }
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({ date: new Date() });
  }
  
  render() {
    return (
      <div className='clock'>
        {this.state.date.toISOString().substr(11, 8)}
      </div>
    )
  }
}

export default Clock;
