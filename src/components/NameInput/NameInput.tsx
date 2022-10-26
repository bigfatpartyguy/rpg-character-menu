import styled from 'styled-components';

const NameInput = ({color}: NameInputProps): JSX.Element => {
  return <StyledInput type="text" placeholder="Character name" color={color} />;
};

// STYLES

const StyledInput = styled.input<StyledInputProps>`
  background: none;
  padding: 5px;
  font-size: 3em;
  border: none;
  color: ${({color}) => color};

  :focus {
    border: none;
    outline: none;
  }

  ::placeholder {
    color: ${({color}) => color};
    opacity: 0.2;
  }
`;

// TYPES

interface StyledInputProps {
  color: string;
}

interface NameInputProps {
  color: string;
}

export default NameInput;
