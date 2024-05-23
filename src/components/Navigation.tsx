import { useContext } from 'react';

import QuestionBtn from './QuestionBtn';
import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types';

interface Props {}

const Navigation: React.FC<Props> = () => {
  const { questionsData, currentQuestionNumber } = useContext(
    AppContext
  ) as AppContextType;

  return (
    <nav className='flex flex-wrap gap-3 justify-center mb-10'>
      {questionsData.map(({ number, selectedAnswer }) => (
        <QuestionBtn
          key={number}
          questionNumber={number}
          active={!!selectedAnswer || currentQuestionNumber === number}
        />
      ))}
    </nav>
  );
};

export default Navigation;
