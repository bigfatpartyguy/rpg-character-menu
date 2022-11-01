import styled from 'styled-components';

const NameInput = ({value, onChange}: NameInputProps): JSX.Element => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Введите имя"
    />
  );
};

// STYLES

const StyledInput = styled.input`
  background: none;
  padding: 5px;
  font-size: 3em;
  border: none;
  color: var(--color-white);

  :focus {
    border: none;
    outline: none;
  }

  ::placeholder {
    color: var(--color-white);
    font-size: 0.8em;
    opacity: 0.2;
  }
`;

// TYPES

interface NameInputProps {
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default NameInput;
