import { createContext, useState, useEffect } from 'react';
import { setupInterceptors } from '../API/api';

const AppContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  useEffect(() => {
    setupInterceptors(setToken);
  }, [setToken]);

  return (
    <AppContext.Provider value={{ user, setUser, token, setToken, setAppointmentDetails, appointmentDetails }}>
      {children}
    </AppContext.Provider>
  );
};

export { UserProvider, AppContext };
