import { useState } from 'react';

import { AppContext } from './AppContext';
import { createQuestionsData } from '../lib/createQuestionsData';

interface Props {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const questions = createQuestionsData(10);
  const [questionsData] = useState(questions);

  const value = {
    questionsData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
