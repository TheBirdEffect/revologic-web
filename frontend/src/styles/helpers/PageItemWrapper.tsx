import React, { ReactNode } from "react";

interface PageItemWrapperProps {
  id?: string;
  className?: string;
  width?: string;
  width100?: boolean;
  height?: string;
  height100?: boolean;
  display?: string;
  flexDirection?: 'column' | 'row';
  justifyContent?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingTopBottom?: string;
  noPadding?: boolean;
  backgroundColor?: string;
  children?: ReactNode;
  borderRadius?: string | boolean;
  onClick?: () => void;
  wrap?: string | boolean;
  noGap?: boolean;
  hasShadow?: "up" | "down";
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