import { AppContext } from './AppContext';

interface Props {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<Props> = ({ children }) => (
  <AppContext.Provider value={null}>{children}</AppContext.Provider>
);

export default AppContextProvider;
