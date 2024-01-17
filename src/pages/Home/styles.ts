import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 2%;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 40px;
  }
`;

const OutletContainer = styled.div`
  margin-top: 10px;
  overflow: auto;
`;

export default { ButtonsContainer, OutletContainer };
