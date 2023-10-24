import { Button } from "./FeedbackOptions.styled";

export function FeedbackOptions({ options, onLeaveFeedback }) {
    const { good, neutral, bad } = options;
    return <div>
        <Button type="button" name="good" value={good} onClick={onLeaveFeedback}>Good</Button>
        <Button type="button" name="neutral" value={neutral} onClick={onLeaveFeedback}>Neutral</Button>
        <Button type="button" name="bad" value={bad} onClick={ onLeaveFeedback}>Bad</Button>
    </div>
}