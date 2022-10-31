import React from 'react';
import styled, {css} from 'styled-components';

const Button = ({
  children,
  type,
  onClick,
  onChange,
}: ButtonProps): JSX.Element => {
  if (type === 'file') {
    return <StyledFileButton onChange={onChange}>{children}</StyledFileButton>;
  }
  return (
    <StyledButtonContainer onClick={onClick}>{children}</StyledButtonContainer>
  );
};

const FileButton = ({
  className,
  children,
  onChange,
}: FileButtonProps): JSX.Element => {
  return (
    <div className={className} tabIndex={0}>
      <label htmlFor="fileInput">{children}</label>
      <input type="file" id="fileInput" onChange={onChange} accept=".json" />
    </div>
  );
};

// STYLES

const commonStyles = css`
  border: none;
  background-color: var(--color-white-transp04);
  color: var(--color-dark-600);
  padding: 10px 40px;
  clip-path: polygon(
    7% 0%,
    93% 0%,
    100% 50%,
    100% 50%,
    93% 100%,
    7% 100%,
    0 50%,
    0 50%
  );
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 700;
  :hover,
  :focus {
    background-color: var(--color-white-transp08);
    outline: none;
  }
  :active {
    background-color: var(--color-yellow-light);
  }
  transition: all 200ms ease;
`;

const StyledFileButton = styled(FileButton)`
  display: inline-block;
  ${commonStyles}
  label {
    cursor: inherit;
  }
  #fileInput {
    visibility: hidden;
    display: none;
  }
`;

const StyledButtonContainer = styled.button`
  ${commonStyles}
`;

// TYPES

interface FileButtonProps {
  className?: string;
  children: React.ReactNode;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonProps {
  children?: string;
  type: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export default Button;
