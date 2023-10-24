import { Notification } from "components/NotificationMessage/NotificationMessage"
import { StatisticsContainer, StatisticsItem } from "./Statistics.styled"

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