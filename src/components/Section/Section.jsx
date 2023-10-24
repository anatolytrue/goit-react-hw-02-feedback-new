import { SectionTitle, SectionContainer } from "./Section.styled"

export const Section = ({title, children}) => 
    <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </SectionContainer>
