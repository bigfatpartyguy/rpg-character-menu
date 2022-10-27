import React from 'react';
import styled from 'styled-components';

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
  console.log(typeof children);
  return (
    <div className={className}>
      <label htmlFor="fileInput">{children}</label>
      <input type="file" id="fileInput" onChange={onChange} />
    </div>
  );
};

// STYLES

const StyledFileButton = styled(FileButton)`
  display: inline-block;
  label {
    cursor: pointer;
    font-size: 1.5em;
    font-weight: 700;
  }
  #fileInput {
    visibility: hidden;
    display: none;
  }
`;

const StyledButtonContainer = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 700;
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
