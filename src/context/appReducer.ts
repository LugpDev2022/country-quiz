import { AppState } from '../types';

type Action = {
  type: 'SET_CURRENT_QUESTION_NUMBER' | 'SET_ANSWER';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_ANSWER':
      // eslint-disable-next-line no-case-declarations
      const newQuestionsData = state.questionsData.map((question, index) =>
        index === action.payload.questionNumber - 1
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

    default:
      return state;
  }
};
