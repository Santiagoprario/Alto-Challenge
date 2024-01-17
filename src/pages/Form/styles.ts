import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
`;

const Input = styled.input`
padding: 10px;
margin-top: 15px;
margin-bottom: 15px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 4px;
outline: none;

&:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

export default { ButtonsContainer, FormContainer, Input };
