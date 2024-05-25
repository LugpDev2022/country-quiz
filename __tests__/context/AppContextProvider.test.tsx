import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, vi } from 'vitest';

import AppContextProvider from '../../src/context/AppContextProvider';
import * as ContextProviderModule from '../../src/context/hooks/useContextProvider.ts';

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
    const spy = vi.spyOn(ContextProviderModule, 'useContextProvider');

    render(
      <MemoryRouter>
        <AppContextProvider>
          <h1>Test</h1>
        </AppContextProvider>
      </MemoryRouter>
    );

    expect(spy).toHaveBeenCalled();
  });
});
