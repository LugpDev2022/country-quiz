import { useContext } from 'react';

import AnswerBtn from './components/AnswerBtn';
import Navigation from './components/Navigation';
import { AppContext } from './context/AppContext';
import { AppContextType } from './types';

const App = () => {
  const { questionsData, currentQuestionNumber } = useContext(
    AppContext
  ) as AppContextType;

  const { question, answers, correctAnswer } =
    questionsData[currentQuestionNumber - 1];

  return (
    <main className='main'>
      <h1 className='font-bold text-sm tracking-wider text-[#8B8EAB] mb-5'>
        Country Quiz
      </h1>

      <Navigation />

      <h2 className='text-xl font-semibold mb-10'>{question}</h2>

      <section className='grid grid-cols-2 gap-5'>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {answers.map((answer, i: any) => (
          <AnswerBtn
            answerNumber={i + 1}
            key={answer}
            correct={correctAnswer === i + 1}
          >
            {answer}
          </AnswerBtn>
        ))}
      </section>
    </main>
  );
};

export default App;
