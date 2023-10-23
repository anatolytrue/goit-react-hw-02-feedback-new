import { Component } from "react";
import { Container } from "./App.styled";
// import { Statistics } from "components/Statistics/Statistics";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = e => {
    // console.log('propertyName', propertyName)
    console.log('this.state', this.state)
    console.log('this.e', e.target.name)
    
    this.setState(prevState => {
      const valueStat = prevState[e.target.name];
      return {
        [e.target.name]: valueStat + 1
      }
    })

  }

  countTotalFeedback() {
    
  }

  countPositiveFeedbackPercentage() {
    
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <Container>

        <h2>Please leave feedback</h2>
        <div>
          <button type="button" name="good" value={"good"} onClick={this.onLeaveFeedback}>Good</button>
          <button type="button" name="neutral" value={"neutral"} onClick={this.onLeaveFeedback}>Neutral</button>
          <button type="button" name="bad" value={"bad"} onClick={ this.onLeaveFeedback}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div style={{
          display: "flex",
          flexDirection: "column"
        }}>
          <span>Good: { good}</span>
          <span>Neutral: { neutral}</span>
          <span>Bad: { bad} </span>
          <span>Total: </span>
          <span>Positive feedback: </span>
        </div>
      </Container>

    )
  }


  }
