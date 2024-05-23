import { AppState } from '../types';

type Action = {
  type: 'SET_CURRENT_QUESTION_NUMBER' | 'SET_ANSWER';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_ANSWER':
      console.log(action.payload);
      console.log(state.questionsData[action.payload.questionNumber - 1]);

      state.questionsData[action.payload.questionNumber - 1].selectedAnswer =
        action.payload.answerNumber;

      return state;

    case 'SET_CURRENT_QUESTION_NUMBER':
      return { ...state, currentQuestionNumber: action.payload as number };

    default:
      return state;
  }
};
