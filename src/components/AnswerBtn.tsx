import { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types';

interface Props {
  answerNumber: 1 | 2 | 3 | 4;
  correct?: boolean;
  selected?: boolean;
  children: React.ReactNode;
}

const AnswerBtn: React.FC<Props> = ({
  children,
  answerNumber,
  correct = false,
  selected = false,
}) => {
  const { sendAnswer, questionsData, currentQuestionNumber } = useContext(
    AppContext
  ) as AppContextType;

  const { selectedAnswer } = questionsData[currentQuestionNumber - 1];

  const handleClick = () => {
    sendAnswer(currentQuestionNumber, answerNumber);
  };

  console.log(selectedAnswer);

  return (
    <button
      onClick={handleClick}
      className={`answer-btn gradient ${selected ? 'gradient-stay' : ''}`}
      disabled={!!selectedAnswer}
    >
      {children}
    </button>
  );
};

export default AnswerBtn;
