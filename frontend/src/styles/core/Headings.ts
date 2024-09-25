import { styled } from "styled-components";
import { theme } from "../Theme";

export const Overline = styled.h1`
    font-size: 48px;
    text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.25);	
`

export const CardHeadLine = styled.h3`
    font-weight: 700;
    color: ${theme.colors.black};
`

export const CardDescriptor = styled.h4`
    font-weight: 600;
    color: ${theme.colors.descriptorPrimary};
`

export const ContentCardHeadline = styled.h3`
    font-weight: 600;
    color: ${theme.colors.black};
`