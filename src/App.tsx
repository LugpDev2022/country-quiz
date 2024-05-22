import { useContext } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';

import AnswerBtn from './components/AnswerBtn';
import Navigation from './components/Navigation';
import { AppContext } from './context/AppContext';
import { AppContextType } from './types';

const App = () => {
  const { questionsData } = useContext(AppContext) as AppContextType;

  const { search } = useLocation();

  const { question: questionNumber } = queryString.parse(search) as {
    question: string;
  };

  const parsedQuestionNumber = questionNumber ? parseInt(questionNumber) : 1;

  const { question } = questionsData[parsedQuestionNumber - 1];

  return (
    <main className='main'>
      <h1 className='font-bold text-sm tracking-wider text-[#8B8EAB] mb-5'>
        Country Quiz
      </h1>

      <Navigation questionNumber={parsedQuestionNumber} />

      <h2 className='text-xl font-semibold mb-10'>{question}</h2>

      <section className='grid grid-cols-2 gap-5'>
        <AnswerBtn />
        <AnswerBtn />
        <AnswerBtn />
        <AnswerBtn />
      </section>
    </main>
  );
};

export default App;
