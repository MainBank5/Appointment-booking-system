import { createContext, useState, useEffect } from 'react';
import { setupInterceptors } from '../API/api';
// eslint-disable-next-line no-unused-vars
import React from 'react';

const AppContext = createContext();


// eslint-disable-next-line react/prop-types
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
