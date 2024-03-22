import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  location: null,
  service: null,
  therapist: null,
  date: null,
  time: null,
};

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_LOCATION':
      return { ...state, location: action.payload };
    case 'SELECT_SERVICE':
      return { ...state, service: action.payload };
    case 'SELECT_THERAPIST':
      return { ...state, therapist: action.payload };
    case 'SELECT_DATE':
      return { ...state, date: action.payload };
    case 'SELECT_TIME':
      return { ...state, time: action.payload };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
