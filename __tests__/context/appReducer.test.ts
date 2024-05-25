import { appReducer } from '../../src/context/appReducer';
import type { AppState } from '../../src/types';

describe('Tests on app reducer', () => {
  const state: AppState = {
    completedQuestions: 0,
    currentQuestionNumber: 2,
    questionsData: [
      {
        question: 'Test question',
        answers: ['1', '2', '3', '4'],
        correctAnswer: 4,
        selectedAnswer: null,
      },
      {
        question: 'Test question 2',
        answers: ['1', '2', '3', '4'],
        correctAnswer: 2,
        selectedAnswer: null,
      },
    ],
  };

  test('should set the given answer correctly ', () => {
    const newState = appReducer(state, {
      type: 'SET_ANSWER',
      payload: { questionIndex: 1, answerNumber: 4 },
    });

    expect(newState.questionsData[1].selectedAnswer).toBe(4);
  });

  test('should set the given question number', () => {
    const newState = appReducer(state, {
      type: 'SET_CURRENT_QUESTION_NUMBER',
      payload: 5,
    });

    expect(newState.currentQuestionNumber).toBe(5);
  });

  test('should reset the state', () => {
    const newState = appReducer(state, {
      type: 'RESET_STATE',
      payload: [],
    });

    expect(newState).toEqual({
      completedQuestions: 0,
      currentQuestionNumber: 1,
      questionsData: [],
    });
  });
});
