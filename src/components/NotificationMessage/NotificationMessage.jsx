import { NotificationText } from "./SectionContainer.styled"
import PropTypes from 'prop-types';

export const Notification = ({ message }) => 
    <div>
        <NotificationText>{message}</NotificationText>
    </div>
    
Notification.propTypes = {
    message: PropTypes.string.isRequired
}