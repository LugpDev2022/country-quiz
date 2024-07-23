import { useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { appReducer } from '../appReducer';
import { getQuestionNumber } from '../../lib/getQuestionNumber';
import { questions } from '../../questions';

export const useContextProvider = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(appReducer, {
    currentQuestionNumber: 1,
    questionsData: questions,
    completedQuestions: 0,
  });

  const { completedQuestions, questionsData } = state;

  useEffect(() => {
    const questionNumber = getQuestionNumber(search);

    dispatch({ type: 'SET_CURRENT_QUESTION_NUMBER', payload: questionNumber });
  }, [search]);

  useEffect(() => {
    if (completedQuestions === questionsData.length) {
      navigate('/results');
    }
  }, [completedQuestions, questionsData.length, navigate]);

  const sendAnswer = (questionIndex: number, answerNumber: 1 | 2 | 3 | 4) => {
    dispatch({ type: 'SET_ANSWER', payload: { questionIndex, answerNumber } });
  };

  const handlePlayAgain = () => {
    dispatch({ type: 'RESET_STATE', payload: questions });
  };

  return { state, sendAnswer, handlePlayAgain };
};
