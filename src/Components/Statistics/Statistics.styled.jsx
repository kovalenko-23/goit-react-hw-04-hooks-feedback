import styled from "@emotion/styled";

export const Statistic = styled.p`
    margin: 0;
    margin-bottom: 2px;
    font-weight: ${props => props.higlight && 'bold'}
`

export const StatisticPannel = styled.div`
    display: inline-flex;
    flex-direction: column;
`