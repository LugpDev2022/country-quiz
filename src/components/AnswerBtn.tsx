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

  const questionIndex = currentQuestionNumber - 1;

  const { selectedAnswer } = questionsData[questionIndex];

  const handleClick = () => {
    sendAnswer(questionIndex, answerNumber);
  };

  return (
    <button
      onClick={handleClick}
      className={`answer-btn gradient ${selected ? 'gradient-stay' : ''}`}
      disabled={!!selectedAnswer}
    >
      {children}

      {selected ? (
        correct ? (
          <img src='/check.svg' alt='check' />
        ) : (
          <img src='/cross.svg' alt='cross' />
        )
      ) : (
        correct && selectedAnswer && <img src='/check.svg' alt='check' />
      )}
    </button>
  );
};

export default AnswerBtn;
