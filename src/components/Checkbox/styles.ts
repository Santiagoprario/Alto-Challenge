import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const CheckboxTitle = styled.p`
  margin-bottom: 8px;
  font-weight: bold;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  user-select: none;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid #241178;
    background-color: white;
    border-radius: 50%;
    box-sizing: border-box;
  }

  &:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 6px;
    width: 8px;
    height: 8px;
    background-color: #241178;
    border-radius: 50%;
    box-sizing: border-box;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.2s, transform 0.2s;
  }
`;

const CheckboxInput = styled.input`
  display: none;

  &:checked + ${CheckboxLabel}:before {
    background-color: white;
    border-color: #241178;
  }

  &:checked + ${CheckboxLabel}:after {
    opacity: 1;
    transform: scale(1);
  }
`;

export default { CheckboxContainer, CheckboxInput, CheckboxLabel, CheckboxTitle, CheckboxWrapper };
