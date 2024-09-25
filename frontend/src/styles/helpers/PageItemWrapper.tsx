import React, { ReactNode } from "react";

interface PageItemWrapperProps {
  id?: string;
  className?: string;
  width?: string;
  display?: string;
  flexDirection?: 'column' | 'row';
  justifyContent?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  backgroundColor?: string;
  children?: ReactNode;
  borderRadius?: string | boolean;
  onClick?: () => void;
}

export const PageItemWrapper: React.FC<PageItemWrapperProps> = (
  { 
    className,
    onClick,
    children 
  }) => {
  return (
    <>
      <div className={className} onClick={onClick}>{children}</div>
    </>
  );
};