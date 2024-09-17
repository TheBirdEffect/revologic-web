import React, { ReactNode } from "react";

interface PageItemWrapperProps {
  id?: string;
  className?: string;
  display?: string;
  flexDirection?: 'column' | 'row';
  justifyContent?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  children?: ReactNode;
  borderRadius?: string;
}

export const PageItemWrapper: React.FC<PageItemWrapperProps> = ({ className, children }) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};