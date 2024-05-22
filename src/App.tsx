import { useContext } from 'react';
import { useLocation } from 'react-router';

import AnswerBtn from './components/AnswerBtn';
import Navigation from './components/Navigation';
import { AppContext } from './context/AppContext';
import { AppContextType } from './types';
import { getQuestionNumber } from './lib/getQuestionNumber';

const App = () => {
  const { questionsData } = useContext(AppContext) as AppContextType;
  const { search } = useLocation();

  const questionNumber = getQuestionNumber(search);

  const { question } = questionsData[questionNumber - 1];

  return (
    <main className='main'>
      <h1 className='font-bold text-sm tracking-wider text-[#8B8EAB] mb-5'>
        Country Quiz
      </h1>

      <Navigation questionNumber={questionNumber} />

      <h2 className='text-xl font-semibold mb-10'>{question}</h2>

      <section className='grid grid-cols-2 gap-5'>
        <AnswerBtn answerNumber={1} currentQuestionNumber={questionNumber} />
        <AnswerBtn answerNumber={2} currentQuestionNumber={questionNumber} />
        <AnswerBtn answerNumber={3} currentQuestionNumber={questionNumber} />
        <AnswerBtn answerNumber={4} currentQuestionNumber={questionNumber} />
      </section>
    </main>
  );
};

export default App;
