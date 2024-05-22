import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import QuestionBtn from './QuestionBtn';
import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types';

const Navigation = () => {
  const { questionsData } = useContext(AppContext) as AppContextType;
  const { search } = useLocation();

  const { question: questionNumber } = queryString.parse(search) as {
    question: string;
  };

  return (
    <nav className='flex flex-wrap gap-3 justify-center mb-10'>
      {questionsData.map(({ number, answered }) => {
        const isFirstQuestion = !questionNumber && number === 1;

        return (
          <QuestionBtn
            key={number}
            questionNumber={number}
            active={
              answered || parseInt(questionNumber) === number || isFirstQuestion
            }
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
