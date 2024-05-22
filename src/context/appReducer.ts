import { AppContextType } from '../types';

type Action = {
  type: 'SET_CURRENT_QUESTION_NUMBER';
  payload: unknown;
};

export const appReducer = (
  state: AppContextType,
  action: Action
): AppContextType => {
  switch (action.type) {
    case 'SET_CURRENT_QUESTION_NUMBER':
      return { ...state, currentQuestionNumber: action.payload as number };

    default:
      return state;
  }
};
