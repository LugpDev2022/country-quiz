import { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types';

interface Props {
  answerNumber: 1 | 2 | 3 | 4;
  currentQuestionNumber: number;
}

const AnswerBtn: React.FC<Props> = ({
  answerNumber,
  currentQuestionNumber,
}) => {
  const { questionsData } = useContext(AppContext) as AppContextType;

  const handleClick = () => {
    console.log(currentQuestionNumber);
    console.log('answered ' + answerNumber);
  };

  return (
    <button
      onClick={handleClick}
      className='answer-btn gradient'
      disabled={questionsData[currentQuestionNumber - 1].answered}
    >
      Answer Button
    </button>
  );
};

export default AnswerBtn;
