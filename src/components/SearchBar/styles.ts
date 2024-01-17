import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 2px solid #241178;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  margin-right: 10px;
  width: 200px;

  &::placeholder {
    color: #241178;
  }
`;

export default { SearchBarContainer, SearchInput };
