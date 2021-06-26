import React from "react";
import styled from "styled-components";

export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <StyledButton className={`${className}`} {...rest} data-testid="btn">
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.05);
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;

  width: 100%;
  height: 44px;

  /* Heading / H5 - Small / Semi Bold */

  /* font-family: Inter; */
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: -0.02em;

  /* Primary/Blue 500 */

  background: #1d4ed8;
  border-radius: 5px;

  transition: all 0.2s;

  outline: none !important;

  &:hover {
    background: #112f82;
  }
`;
