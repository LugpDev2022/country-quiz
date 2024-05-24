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
      {questionsData.map(({ question, selectedAnswer }, i) => {
        const questionNumber = i + 1;

        return (
          <QuestionBtn
            key={question}
            questionNumber={questionNumber}
            active={
              !!selectedAnswer || currentQuestionNumber === questionNumber
            }
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
