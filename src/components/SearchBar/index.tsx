/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';
import Styled from './styles';
import { Button } from '..';

export interface SearchBarProps {
  placeholder?: string;
  value: string;
  disabled?: boolean;
  onSearch: (e: any) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ placeholder, disabled, value, onSearch, onChange }) => {

  return (
    <Styled.SearchBarContainer>
      <Styled.SearchInput type="text" placeholder={placeholder} onChange={onChange} value={value} />
      <Button type="button" disabled={disabled} onClick={onSearch}>Búscar</Button>
    </Styled.SearchBarContainer>
  );
};

export default SearchBar;
