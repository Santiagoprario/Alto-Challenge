/* eslint-disable no-unused-vars */
import React from 'react';
import Styled from './styles';

export interface CheckboxProps {
  title?: string;
  value: boolean;
  onChange( newValue: boolean ): void;
}

const CheckboxComponent: React.FunctionComponent<CheckboxProps> = ({ title, value, onChange }: CheckboxProps) => {
  return (
    <Styled.CheckboxContainer>
      <Styled.CheckboxTitle>{title}</Styled.CheckboxTitle>
      <Styled.CheckboxWrapper>
        <div style={{marginRight:'50px'}}>
          <Styled.CheckboxInput
            type="checkbox"
            id={`${title}-checkbox-yes`}
            checked={value}
            onChange={() => onChange(!value)}
          />
          <Styled.CheckboxLabel htmlFor={`${title}-checkbox-yes`}>Sí</Styled.CheckboxLabel>
        </div>
        <div>
          <Styled.CheckboxInput
            type="checkbox"
            id={`${title}-checkbox-no`}
            checked={!value}
            onChange={() => onChange(!value)}
          />
          <Styled.CheckboxLabel htmlFor={`${title}-checkbox-no`}>No</Styled.CheckboxLabel>
        </div>
      </Styled.CheckboxWrapper>
    </Styled.CheckboxContainer>
  );
};

export default CheckboxComponent;
