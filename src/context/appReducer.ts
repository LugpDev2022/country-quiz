import type { AppState } from '../types';
import type { Action } from './reducerTypes';

export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_ANSWER':
      // Map over the questionsData array to create a new array with updated data
      // eslint-disable-next-line no-case-declarations
      const newQuestionsData = state.questionsData.map((question, index) =>
        // If the current index matches the questionIndex, update the selectedAnswer
        index === action.payload.questionIndex
          ? { ...question, selectedAnswer: action.payload.answerNumber }
          : question
      );

      return {
        ...state,
        questionsData: newQuestionsData,
        completedQuestions: state.completedQuestions + 1,
      };

    case 'SET_CURRENT_QUESTION_NUMBER':
      return { ...state, currentQuestionNumber: action.payload as number };

    case 'RESET_STATE':
      return {
        completedQuestions: 0,
        currentQuestionNumber: 1,
        questionsData: action.payload,
      };

    default:
      return state;
  }
};
