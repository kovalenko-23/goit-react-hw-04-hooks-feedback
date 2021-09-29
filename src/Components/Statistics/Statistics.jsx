import { StatisticPannel, Statistic } from './Statistics.styled';
import PropTypes from 'prop-types'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatisticPannel>
            <Statistic>Good: {good}</Statistic>
            <Statistic>Neutral: {neutral}</Statistic>
            <Statistic>Bad: {bad}</Statistic>
            <Statistic higlight>Total: {total}</Statistic>
            <Statistic higlight>Positive feedback: {positivePercentage}%</Statistic>
        </StatisticPannel>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
}