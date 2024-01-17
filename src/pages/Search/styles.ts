import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
`;

const DetailContainer = styled.div`
  margin: 10px;
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

export default { SearchBarContainer, DetailItem, DetailContainer };
