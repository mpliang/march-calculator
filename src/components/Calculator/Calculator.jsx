import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	leaveAt: undefined,
			marchMinutes: undefined,
      marchSeconds: undefined,
      attackHours: undefined,
      attackMinutes: undefined,
      soloMarch: false
    }
  }
  
  calculateMarchTime = (marchMinutes = 0, marchSeconds = 0, attackMinutes = 0, attackHours = 0) => {
		//eg 1:45:00, march 1:28 = 1:38:32
    const attackTime = (attackHours * 60 + attackMinutes) * 60;
    const rallyTime = this.state.soloMarch ? 0 : 5*60;
    const secondsMarch = marchMinutes * 60 + marchSeconds;
    const leaveAt = new Date((attackTime - rallyTime - secondsMarch )* 1000).toISOString().substr(11, 8);
    this.setState({ leaveAt });
  }
  
  recalculateForSoloMarch = () => {
  	this.setState({ soloMarch: !this.state.soloMarch }, () => {
      const { marchMinutes, marchSeconds, attackMinutes, attackHours } = this.state;
    	this.calculateMarchTime(marchMinutes, marchSeconds, attackMinutes, attackHours);
    })
  }
  
  setTime = (type) => (e) => {
  	const { value } = e.target;
  	if ((/[0-9]/).test(value) && value.length < 3) {
      this.setState({ [type]: +e.target.value }, () => {
        const { marchMinutes, marchSeconds, attackMinutes, attackHours } = this.state;
        this.calculateMarchTime(marchMinutes, marchSeconds, attackMinutes, attackHours);
      });
    } else {
    	this.setState({ [type]: +e.target.value });
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>March Time: </h2>
          minutes: <input onChange={this.setTime('marchMinutes')} value={this.state.marchMinutes}></input>
          seconds: <input onChange={this.setTime('marchSeconds')} value={this.state.marchSeconds}></input>
        </div>
        <div>
          <h2>Attack Time:</h2> 
          hours: <input onChange={this.setTime('attackHours')} value={this.state.attackHours}></input>
          minutes: <input onChange={this.setTime('attackMinutes')} value={this.state.attackMinutes}></input>
          seconds: 00
        </div>
        <div>Solo march?<input type="checkbox" onClick={this.recalculateForSoloMarch} value={this.state.soloMarch}></input></div>
        <h1>March At: {this.state.leaveAt} </h1>
      </div>
    )
  }
}

export default Calculator;
