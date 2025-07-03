import { createContext, useState } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [selectedCoords, setSelectedCoords] = useState(null);

  return (
    <LocationContext.Provider value={{ selectedCoords, setSelectedCoords }}>
      {children}
    </LocationContext.Provider>
  );
};
