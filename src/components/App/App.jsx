import { Component } from "react";
import { Container } from "./App.styled";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = e => {
    this.setState(prevState => {
      const valueStat = prevState[e.target.name];
      return {
        [e.target.name]: valueStat + 1
      }
    })
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }


  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    console.log(parseInt((good / this.countTotalFeedback())*100))
    return this.countTotalFeedback() ? ((parseInt((good / this.countTotalFeedback())*100))+ "%") : 'leave feedback to see stats!'
  }

  render() {
    const { good, neutral, bad } = this.state

    return (
      <Container>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad } }
            onLeaveFeedback={ this.onLeaveFeedback}
          />
        </Section>
      
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    )
  }
  }
