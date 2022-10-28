import styled from 'styled-components';

const NameInput = ({value, onChange}: NameInputProps): JSX.Element => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Character name"
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
    opacity: 0.2;
  }
`;

// TYPES

interface NameInputProps {
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export default NameInput;
