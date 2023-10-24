import styled from "@emotion/styled";

export const StatisticsContainer = styled.div`
    display: flex;
    flex-direction: column;

    &> *:not(:last-of-type){
        margin-bottom: 5px;
    }
`

export const StatisticsItem = styled.span`
    font-size: 24px; 
    font-weight: 300;
`