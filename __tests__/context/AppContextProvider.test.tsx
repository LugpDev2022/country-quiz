import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { vi } from 'vitest';

import AppContextProvider from '../../src/context/AppContextProvider';
import { useContextProvider } from '../../src/context/hooks/useContextProvider.ts';

vi.mock('../../src/context/hooks/useContextProvider.ts', async () => {
  const useContextProvider = vi.fn();

  useContextProvider.mockReturnValue({
    state: { value: 'test state' },
  });

  return {
    useContextProvider,
  };
});

describe('Tests on <AppContextProvider />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render the children element', () => {
    const text = 'I am the children';

    const { getByText } = render(
      <MemoryRouter>
        <AppContextProvider>
          <h1>{text}</h1>
        </AppContextProvider>
      </MemoryRouter>
    );

    const children = getByText(text);

    expect(children).toBeTruthy();
  });

  test('should call the useContextProvider hook', () => {
    render(
      <MemoryRouter>
        <AppContextProvider>
          <h1>Test</h1>
        </AppContextProvider>
      </MemoryRouter>
    );

    expect(useContextProvider).toHaveBeenCalledTimes(1);
  });
});
