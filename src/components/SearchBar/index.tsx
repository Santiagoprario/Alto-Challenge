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
  onGoBack?: () => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ placeholder, disabled, value, onSearch, onChange, onGoBack }) => {

  return (
    <Styled.SearchBarContainer>
      <Styled.SearchInput type="text" placeholder={placeholder} onChange={onChange} value={value} />
      <Styled.ButtonsContainer>
        <Button type="button" disabled={disabled} onClick={onSearch}>Búscar</Button>
        {onGoBack && <Button type="button" onClick={onGoBack}>Atrás</Button>}
      </Styled.ButtonsContainer>

    </Styled.SearchBarContainer>
  );
};

export default SearchBar;
