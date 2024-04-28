// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
    isTimmerRunning: false,
  }

  componentWillUnmount() {
    clearTimeout(this.timeInterval)
  }

  // mistake1 insteaded of updateTime i wrote updatetime
  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickTimerStart = () => {
    this.setState(prevState => ({
      isTimmerRunning: true,
      ...prevState,
    }))
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  onClickTimerStop = () => {
    clearInterval(this.timeInterval)
    this.setState({
      isTimmerRunning: false,
    })
  }

  onClickTimerReset = () => {
    clearInterval(this.timeInterval)
    this.setState({
      isTimmerRunning: false,
      timeElapsedInSeconds: 0,
    })
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes =
      timeElapsedInSeconds === 0 ? 0 : Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimmerRunning} = this.state
    const {timeElapsedInSeconds} = this.state
    console.log(timeElapsedInSeconds)

    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    console.log(time)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="timer-font">Stopwatch</h1>

          <div className="timer-card">
            <div className="timer-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer"
                alt="stopwatch"
              />
              <p>Timer</p>
            </div>
            <h1 className="timer-font">{time}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="button start-btn"
                onClick={this.onClickTimerStart}
                disabled={isTimmerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-btn"
                onClick={this.onClickTimerStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-btn"
                onClick={this.onClickTimerReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
