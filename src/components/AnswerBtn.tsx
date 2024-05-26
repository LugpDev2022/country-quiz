import { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types';

interface Props {
  answerNumber: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}

const AnswerBtn: React.FC<Props> = ({ children, answerNumber }) => {
  const { sendAnswer, questionsData, currentQuestionNumber } = useContext(
    AppContext
  ) as AppContextType;

  const questionIndex = currentQuestionNumber - 1;

  const { selectedAnswer, correctAnswer } = questionsData[questionIndex];

  const selected = selectedAnswer === answerNumber;
  const correct = correctAnswer === answerNumber;

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
