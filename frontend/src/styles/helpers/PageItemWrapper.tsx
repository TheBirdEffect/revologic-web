import React, { ReactNode } from "react";

interface PageItemWrapperProps {
  id?: string;
  className?: string;
  display?: string;
  flexDirection?: 'column' | 'row';
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  backgroundColor?: string;
  children?: ReactNode;
}

export const PageItemWrapper: React.FC<PageItemWrapperProps> = ({ className, children }) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};