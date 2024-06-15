import {createContext,  useState} from 'react';

const AppContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
  return (
    <AppContext.Provider value={{user, setUser, token, setToken}}>
        {children}
    </AppContext.Provider>
  )
}

export {UserProvider, AppContext};