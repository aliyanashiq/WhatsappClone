import React, { createContext, useState, useContext } from 'react';

// Create a SearchContext
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All'); // Add state for filter

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filter, setFilter }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the SearchContext
export const useSearch = () => useContext(SearchContext);
