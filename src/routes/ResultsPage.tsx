import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AppContextType } from '../types';
import { Navigate } from 'react-router';
import { questions } from '../questions';

const ResultsPage = () => {
  const { completedQuestions } = useContext(AppContext) as AppContextType;

  if (completedQuestions < questions.length) return <Navigate to='/' />;

  return <div>ResultsPage</div>;
};

export default ResultsPage;
