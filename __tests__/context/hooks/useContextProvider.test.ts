import { useReducer } from 'react';
import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { useContextProvider } from '../../../src/context/hooks/useContextProvider';
import { getQuestionNumber } from '../../../src/lib/getQuestionNumber';

vi.mock('react-router', () => {
  return {
    useLocation: vi.fn().mockReturnValue('?question=5'),
    useNavigate: vi.fn(),
  };
});

vi.mock('../../../src/lib/getQuestionNumber', () => {
  return {
    getQuestionNumber: vi.fn().mockReturnValue(4),
  };
});

vi.mock('react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react')>();

  return {
    ...actual,
    useReducer: vi.fn(),
  };
});

describe('Tests on useContextProvider hook', () => {
  const dispatchMock = vi.fn();

  beforeEach(() => {
    useReducer.mockReturnValue([{ questionsData: [] }, dispatchMock]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should set the correct question number', () => {
    renderHook(useContextProvider);

    expect(getQuestionNumber).toHaveBeenCalledWith('?question=4');
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_CURRENT_QUESTION_NUMBER',
      payload: 4,
    });
  });
});
