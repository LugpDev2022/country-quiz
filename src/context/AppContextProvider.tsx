import { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router';

import { AppContext } from './AppContext';
import { questions } from '../questions';
import { appReducer } from './appReducer';
import { getQuestionNumber } from '../lib/getQuestionNumber';

interface Props {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const { search } = useLocation();
  const [state, dispatch] = useReducer(appReducer, {}, () => {
    const currentQuestionNumber = getQuestionNumber(search);

    return {
      currentQuestionNumber,
      questionsData: questions,
      completedQuestions: 0,
    };
  });

  useEffect(() => {
    const questionNumber = getQuestionNumber(search);

    dispatch({ type: 'SET_CURRENT_QUESTION_NUMBER', payload: questionNumber });
  }, [search]);

  useEffect(() => {
    console.log(state.completedQuestions);
  }, [state.completedQuestions]);

  const sendAnswer = (questionNumber: number, answerNumber: 1 | 2 | 3 | 4) => {
    dispatch({ type: 'SET_ANSWER', payload: { questionNumber, answerNumber } });
  };

  return (
    <AppContext.Provider value={{ ...state, sendAnswer }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
