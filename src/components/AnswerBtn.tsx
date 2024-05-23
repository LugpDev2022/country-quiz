import { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types';

interface Props {
  answerNumber: 1 | 2 | 3 | 4;
  correct?: boolean;
  children: React.ReactNode;
}

const AnswerBtn: React.FC<Props> = ({
  children,
  answerNumber,
  correct = false,
}) => {
  const { sendAnswer } = useContext(AppContext) as AppContextType;

  const handleClick = () => {
    sendAnswer(answerNumber);
  };

  return (
    <button onClick={handleClick} className='answer-btn gradient'>
      {children}
    </button>
  );
};

export default AnswerBtn;
