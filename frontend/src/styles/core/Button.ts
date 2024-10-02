import { styled } from "styled-components";
import { theme } from "../Theme";
import { device } from "../BreakPoints";

export const Button = styled.button`
    color: ${(props) => props.color || theme.colors.text};
    background-color: ${theme.colors.buttonPrimary};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
    @media ${device.sm} {
        width: 220px !important;
        height: 55px !important;
        margin: 10px !important;
    }

`

export const TextButton = styled.button`
    color: ${theme.colors.secondaryTextColor};
    font-weight: 600;
    background-color: transparent;
`

export const LanguageButton = styled.button`
    color: ${theme.colors.secondaryTextColor};
    font-weight: 600;
    background-color: transparent;
    border: 2px solid ${theme.colors.secondaryTextColor};
    cursor: pointer;
    border-radius: 20px;
    padding: 6px 12px;
`