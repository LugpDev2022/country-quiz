import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi } from 'vitest';

import AnswerBtn from '../../src/components/AnswerBtn';
import { AppContext } from '../../src/context/AppContext';

describe('Tests on <AnswerBtn />', () => {
  const sendAnswer = vi.fn();

  const staticInfo = {
    currentQuestionNumber: 1,
    sendAnswer,
  };

  const renderWithContext = (contextValue, children) => {
    return render(
      <MemoryRouter>
        <AppContext.Provider value={contextValue}>
          {children}
        </AppContext.Provider>
      </MemoryRouter>
    );
  };

  let mockedContext;

  beforeEach(() => {
    mockedContext = {
      ...staticInfo,
      questionsData: [
        {
          selectedAnswer: null,
          answers: ['1', '2'],
          correctAnswer: 2,
          question: 'Testing question',
        },
      ],
    };
  });

  test('should render the given children', () => {
    const testText = 'Testing Answer';

    const { getByText } = renderWithContext(
      mockedContext,
      <AnswerBtn answerNumber={1}>{testText}</AnswerBtn>
    );

    expect(getByText(testText)).toBeTruthy();
  });

  test('should have the correct CSS class if selected', () => {
    mockedContext.questionsData[0].selectedAnswer = 1;

    const { getByRole } = renderWithContext(
      mockedContext,
      <AnswerBtn answerNumber={1}>Testing Answer</AnswerBtn>
    );

    const btn = getByRole('button');
    expect(btn.className).toContain('gradient-stay');
  });

  test('should not have the CSS class if not selected', () => {
    mockedContext.questionsData[0].selectedAnswer = 2;

    const { getByRole } = renderWithContext(
      mockedContext,
      <AnswerBtn answerNumber={1}>Testing Answer</AnswerBtn>
    );

    const btn = getByRole('button');
    expect(btn.className).not.toContain('gradient-stay');
  });

  test('should disable the button when answer is selected', () => {
    mockedContext.questionsData[0].selectedAnswer = 2;

    const { getByRole } = renderWithContext(
      mockedContext,
      <AnswerBtn answerNumber={1}>Testing Answer</AnswerBtn>
    );

    const btn = getByRole('button') as HTMLButtonElement;
    expect(btn.disabled).toBeTruthy();
  });

  test('should not disable the button when answer is not selected', () => {
    mockedContext.questionsData[0].selectedAnswer = null;

    const { getByRole } = renderWithContext(
      mockedContext,
      <AnswerBtn answerNumber={1}>Testing Answer</AnswerBtn>
    );

    const btn = getByRole('button') as HTMLButtonElement;
    expect(btn.disabled).toBeFalsy();
  });

  test('should call the sendAnswer function on click', () => {
    mockedContext.questionsData[0].selectedAnswer = null;

    const { getByRole } = renderWithContext(
      mockedContext,
      <AnswerBtn answerNumber={1}>Testing Answer</AnswerBtn>
    );

    const btn = getByRole('button');
    fireEvent.click(btn);

    expect(sendAnswer).toHaveBeenCalledWith(0, 1);
  });

  test('should show the check if selected answer is correct', () => {
    mockedContext.questionsData[0].selectedAnswer = 1;
    mockedContext.questionsData[0].correctAnswer = 1;

    const { getByRole } = renderWithContext(
      mockedContext,
      <AnswerBtn answerNumber={1}>Testing Answer</AnswerBtn>
    );

    const img = getByRole('img') as HTMLImageElement;
    expect(img.src).toContain('check.svg');
    expect(img.alt).toBe('check');
  });

  test('should show the correct images', () => {
    mockedContext.questionsData[0].selectedAnswer = 2;
    mockedContext.questionsData[0].correctAnswer = 1;

    const { getAllByRole } = renderWithContext(
      mockedContext,
      <>
        <AnswerBtn answerNumber={1}>Testing Answer</AnswerBtn>
        <AnswerBtn answerNumber={2}>Testing Answer 2</AnswerBtn>
      </>
    );

    const images = getAllByRole('img') as HTMLImageElement[];

    expect(images[0].src).toContain('check.svg');
    expect(images[0].alt).toBe('check');

    expect(images[1].src).toContain('cross.svg');
    expect(images[1].alt).toBe('cross');
  });
});
