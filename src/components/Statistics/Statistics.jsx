import { Notification } from "components/NotificationMessage/NotificationMessage"
import { StatisticsContainer, StatisticsItem } from "./Statistics.styled"
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
    
    return (total > 0)
        ? <StatisticsContainer>
            <StatisticsItem>Good: { good}</StatisticsItem>
            <StatisticsItem>Neutral: { neutral}</StatisticsItem>
            <StatisticsItem>Bad: { bad} </StatisticsItem>
            <StatisticsItem>Total: {total}</StatisticsItem>
            <StatisticsItem>Positive feedback: {positivePercentage}</StatisticsItem>
        </StatisticsContainer>
        : <Notification
            message={"There is no feedback"}
        />
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}