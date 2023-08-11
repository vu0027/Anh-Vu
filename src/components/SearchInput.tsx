// General Search input and can custom style
import React, { useState } from 'react';

interface SearchInputProps {
  /** Handle on Search event */
  onSearch: (query: string) => void;
  /** Custom placeholder */
  placeHolder?: string;
  /** Custom style for component */
  style?: React.CSSProperties;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  placeHolder = 'Search...',
  style
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const searchStyle = {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '5px'
  }

  return (
    <div>
      <input
        style={{ ...style, ...searchStyle }}
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default SearchInput;
