import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi } from 'vitest';

import Navigation from '../../src/components/Navigation';
import QuestionBtn from '../../src/components/QuestionBtn';
import { AppContext } from '../../src/context/AppContext';
import { AppContextType } from '../../src/types';

// Mock QuestionBtn component
vi.mock('../../src/components/QuestionBtn', () => {
  return {
    default: vi.fn(() => null), // Ensure it returns null to avoid rendering issues
  };
});

describe('<Navigation /> Tests', () => {
  const value: AppContextType = {
    currentQuestionNumber: 2,
    questionsData: [
      {
        question: 'Test question',
        selectedAnswer: null,
        answers: ['1', '2'],
        correctAnswer: 2,
      },
      {
        question: 'Test question 2',
        selectedAnswer: null,
        answers: ['1', '2'],
        correctAnswer: 2,
      },
    ],
    completedQuestions: 0,
    handlePlayAgain: () => {},
    sendAnswer: () => {},
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <AppContext.Provider value={value}>
          <Navigation />
        </AppContext.Provider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('should call <QuestionBtn /> with the correct props', () => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={value}>
          <Navigation />
        </AppContext.Provider>
      </MemoryRouter>
    );

    expect(QuestionBtn).toHaveBeenNthCalledWith(
      1,
      { active: false, questionNumber: 1 },
      {}
    );

    expect(QuestionBtn).toHaveBeenNthCalledWith(
      2,
      { active: true, questionNumber: 2 },
      {}
    );
  });

  test('should mark question button as active when answered', () => {
    const testValues: AppContextType = {
      currentQuestionNumber: 1,
      questionsData: [
        {
          question: 'Test question',
          selectedAnswer: null,
          answers: ['1', '2'],
          correctAnswer: 2,
        },
        {
          question: 'Test question 2',
          selectedAnswer: 1,
          answers: ['1', '2'],
          correctAnswer: 2,
        },
      ],
      completedQuestions: 0,
      handlePlayAgain: () => {},
      sendAnswer: () => {},
    };

    render(
      <MemoryRouter>
        <AppContext.Provider value={testValues}>
          <Navigation />
        </AppContext.Provider>
      </MemoryRouter>
    );

    expect(QuestionBtn).toHaveBeenNthCalledWith(
      2,
      { active: true, questionNumber: 2 },
      {}
    );
  });
});
