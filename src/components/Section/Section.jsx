import { SectionTitle, SectionContainer } from "./Section.styled"
import PropTypes from 'prop-types';

export const Section = ({title, children}) => 
    <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </SectionContainer>

Section.propTypes = {
    title: PropTypes.string.isRequired
}