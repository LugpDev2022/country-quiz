import { useState } from 'react';
import { AppContext } from './AppContext';
import { questions } from '../questions';

interface Props {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [questionsData] = useState(questions);

  const value = {
    questionsData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
