import React from 'react';
import { ButtonRoot } from './Button.styles';

type TButtonType = 'button' | 'submit' | 'reset';

export type ClickHandler = React.MouseEventHandler<HTMLButtonElement>;

interface IButtonProps {
  children: React.ReactNode;
  type?: TButtonType;
  onClick?: ClickHandler;
}

export const Button: React.FC<IButtonProps> = ({ children, onClick, type }) => {
  return (
    <ButtonRoot onClick={onClick} type={type}>
      {children}
    </ButtonRoot>
  );
};
