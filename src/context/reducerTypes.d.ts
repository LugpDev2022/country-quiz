type SetAnswerAction = {
  type: 'SET_ANSWER';
  payload: {
    questionIndex: number;
    answerNumber: 1 | 2 | 3 | 4;
  };
};

type SetCurrentQuestionNumberAction = {
  type: 'SET_CURRENT_QUESTION_NUMBER';
  payload: number;
};

type ResetStateAction = {
  type: 'RESET_STATE';
  payload: QuestionData[]; // Assuming payload is an array of QuestionData
};

export type Action =
  | SetAnswerAction
  | SetCurrentQuestionNumberAction
  | ResetStateAction;
