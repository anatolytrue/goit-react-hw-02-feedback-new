import { Button } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    const { good, neutral, bad } = options;
    return <div>
        <Button type="button" name="good" value={good} onClick={onLeaveFeedback}>Good</Button>
        <Button type="button" name="neutral" value={neutral} onClick={onLeaveFeedback}>Neutral</Button>
        <Button type="button" name="bad" value={bad} onClick={ onLeaveFeedback}>Bad</Button>
    </div>
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired
    }),
    onLeaveFeedback: PropTypes.func.isRequired
}