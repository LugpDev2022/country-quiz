import { AppContext } from './AppContext';
import { useContextProvider } from './hooks/useContextProvider';

interface Props {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const { state, handlePlayAgain, sendAnswer } = useContextProvider();

  return (
    <AppContext.Provider value={{ ...state, sendAnswer, handlePlayAgain }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
