import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import QuestionBtn from '../../src/components/QuestionBtn';

describe('Tests on <QuestionBtn />', () => {
  test('should render the correct question number', () => {
    const { getByText } = render(
      <MemoryRouter>
        <QuestionBtn questionNumber={2} />
      </MemoryRouter>
    );

    expect(getByText('2')).toBeTruthy();
  });

  test('should have the correct link', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <QuestionBtn questionNumber={2} />
      </MemoryRouter>
    );

    const link = getByRole('link') as HTMLAnchorElement;
    expect(link.href).toBe('http://localhost:3000/?question=2');
  });

  test('should have the correct css classes when not active', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <QuestionBtn questionNumber={2} />
      </MemoryRouter>
    );

    const link = getByRole('link') as HTMLAnchorElement;
    expect(link.className).toBe('question-btn gradient');
  });

  test('should have the correct css classes when active', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <QuestionBtn questionNumber={2} active />
      </MemoryRouter>
    );

    const link = getByRole('link') as HTMLAnchorElement;
    expect(link.className).toBe('question-btn-active');
  });
});
