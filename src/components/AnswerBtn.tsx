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
  const { sendAnswer } = useContext(AppContext) as AppContextType;

  const handleClick = () => {
    sendAnswer(answerNumber);
  };

  return (
    <button
      onClick={handleClick}
      className={`answer-btn gradient ${selected ? 'gradient-stay' : ''}`}
    >
      {children}
    </button>
  );
};

export default AnswerBtn;
