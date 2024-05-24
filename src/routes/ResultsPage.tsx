import { useContext } from 'react';
import { Navigate } from 'react-router';

import { AppContext } from '../context/AppContext';
import { countCorrectAnswers } from '../lib/countCorrectAnswers';
import { AppContextType } from '../types';
import { questions } from '../questions';

const ResultsPage = () => {
  const { completedQuestions, handlePlayAgain, questionsData } = useContext(
    AppContext
  ) as AppContextType;

  if (completedQuestions < questions.length) return <Navigate to='/' />;

  const correctAnswersNumber = countCorrectAnswers(questionsData);

  return (
    <main className='main-results'>
      <img src='/congrats.svg' alt='congrats' />

      <h1 className='mt-2.5 mb-5 text-2xl px-2'>
        Congrats! You completed the quiz
      </h1>

      <p className='mb-10'>You answer {correctAnswersNumber}/10 correctly</p>

      <button
        className='play-again-btn font-semibold'
        onClick={handlePlayAgain}
      >
        Play again
      </button>
    </main>
  );
};

export default ResultsPage;
