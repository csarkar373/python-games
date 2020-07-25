import React, { Component } from "react";

class Timer extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      count: this.props.maxtime,
      timerOn: false,
      id: null,
    };
  }

  componentWillUnmount() {
    // console.log("cancelling timer id#:", this.state.id);
    clearTimeout(this.state.id);
  }

  componentDidMount() {
    // guard against multiple timers existing concurrently
    if (this.state.timerOn) {
      this.setState({
        count: this.props.maxtime,
      });
      return;
    }

    let id = 0;
    let timerOn = false;
    // currently, timer does not start until first question answered
    //console.log("timer autostart = ", this.props.autoStart);
    if (this.props.autoStart) {
      id = setTimeout(this.decrementTimer, 1000);
      timerOn = true;
    }

    this.setState({
      count: this.props.maxtime,
      timerOn: timerOn,
      id: id,
    });

    // console.log("Timer did mount ");
  }

  decrementTimer = () => {
    // console.log("decrementing Timer #", this.state.id);

    if (this.state.timerOn) {
      if (this.state.count > 0) {
        const id = setTimeout(this.decrementTimer, 1000);
        this.setState({ count: this.state.count - 1, id: id });
      } else {
        // console.log("timer expired id:", this.props.timeout, this.state.id);
        this.props.timeout();
        this.setState({ timerOn: false });
      }
    }
  };

  resetTimer = () => {
    // do not create multiple timers
    if (!this.state.timerOn) {
      // eslint-disable-next-line
      const id = setTimeout(this.decrementTimer, 1000);
      //  console.log("restarting timer id=", id);
    }
    this.setState({
      count: this.props.maxtime,
      timerOn: true,
      // id: id,
    });
  };

  addToTimer = () => {
    if (this.state.timerOn)
      this.setState({ count: this.state.count + this.props.addtime });
  };

  stopTimer = () => {
    //console.log("cancelling timer ");
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>Time left: {count} seconds</h3>
      </div>
    );
  }
}
export default Timer;
