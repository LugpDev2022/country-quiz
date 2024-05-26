import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

import Navigation from '../../src/components/Navigation';
import { MemoryRouter } from 'react-router';
import QuestionBtn from '../../src/components/QuestionBtn';

// Mock useContext from React to control the context values used in the component
vi.mock('react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react')>();
  return {
    ...actual,
    useContext: vi.fn(),
  };
});

// Mock QuestionBtn component
vi.mock('../../src/components/QuestionBtn', () => {
  return {
    default: vi.fn(() => null), // Ensure it returns null to avoid rendering issues
  };
});

describe('<Navigation /> Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset useContext mock to default state before each test
    useContext.mockReturnValue({
      currentQuestionNumber: 2,
      questionsData: [
        { question: 'Test question', selectedAnswer: null },
        { question: 'Test question 2', selectedAnswer: null },
      ],
    });
  });

  test('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('should call <QuestionBtn /> with the correct props', () => {
    render(
      <MemoryRouter>
        <Navigation />
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
    useContext.mockReturnValue({
      currentQuestionNumber: 1,
      questionsData: [
        { question: 'Test question', selectedAnswer: null },
        { question: 'Test question 2', selectedAnswer: 2 },
      ],
    });

    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(QuestionBtn).toHaveBeenNthCalledWith(
      2,
      { active: true, questionNumber: 2 },
      {}
    );
  });
});
