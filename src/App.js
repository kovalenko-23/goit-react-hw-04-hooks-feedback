import { useState } from 'react';
import { Section } from './Components/Section/Section';
import { FeedbackOptions } from './Components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Components/Statistics/Statistics';
import { Notification } from './Components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const values = [good, neutral, bad];
    const total = values.reduce((prevValue, value) => {
      return prevValue + value;
    }, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = (good * 100) / total;
    return percentage.toFixed(0);
  };

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const positiveFeedbcakPercentage = countPositiveFeedbackPercentage();

  return (
    <div className="App">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />

        {totalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbcakPercentage}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
    </div>
  );
}

export default App;
