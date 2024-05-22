import { useContext } from 'react';

import QuestionBtn from './QuestionBtn';
import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types';

interface Props {
  questionNumber: number | null;
}

const Navigation: React.FC<Props> = ({ questionNumber }) => {
  const { questionsData } = useContext(AppContext) as AppContextType;

  return (
    <nav className='flex flex-wrap gap-3 justify-center mb-10'>
      {questionsData.map(({ number, answered }) => (
        <QuestionBtn
          key={number}
          questionNumber={number}
          active={answered || questionNumber === number}
        />
      ))}
    </nav>
  );
};

export default Navigation;
