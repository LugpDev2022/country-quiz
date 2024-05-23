import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types';
import { Navigate } from 'react-router';
import { questions } from '../questions';

const ResultsPage = () => {
  const { completedQuestions } = useContext(AppContext) as AppContextType;

  if (completedQuestions < questions.length) return <Navigate to='/' />;

  return (
    <main className='main-results'>
      <img src='/congrats.svg' alt='congrats' />

      <h1 className='mt-2.5 mb-5 text-2xl px-2'>
        Congrats! You completed the quiz
      </h1>

      <p className='mb-10'>You answer 4/10 correctly</p>

      <button className='play-again-btn font-semibold'>Play again</button>
    </main>
  );
};

export default ResultsPage;
