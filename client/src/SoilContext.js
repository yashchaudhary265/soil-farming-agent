import React, { createContext, useState } from 'react';

export const SoilContext = createContext();

export const SoilProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(null); // { lat, lon }

  return (
    <SoilContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </SoilContext.Provider>
  );
};