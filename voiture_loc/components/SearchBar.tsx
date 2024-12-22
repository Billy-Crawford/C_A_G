// components/SearchBar.tsx
"use client";

import React, { ChangeEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); // Assurez-vous que cette fonction gère bien le filtrage
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      className="border rounded p-2 w-64" // Modifier la largeur pour éviter qu'elle ne prenne toute la ligne
    />
  );
};

export default SearchBar;
