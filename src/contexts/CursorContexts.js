// CursorContext.js
import React, { createContext, useState, useContext } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [hoveredElementType, setHoveredElementType] = useState(null);

  const value = {
    hoveredElementType,
    setHoveredElementType,
  };

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);