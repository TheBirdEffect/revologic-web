import styled from "styled-components";
import { PageItemWrapper as Wrapper } from "../../helpers/PageItemWrapper";
import { device } from "../../BreakPoints";
import { theme } from "../../Theme";


export const StackLayout = styled(Wrapper)`
  id: ${(props) => props.id};
  display: flex;
  gap: ${(props) => props.noGap ? "0" : "1rem"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : props.wrap)};
  width: ${(props) => props.width? props.width : props.width100 ? "100%" : "auto"};
  height: ${(props) => props.height? props.height : props.height100 ? "100%" : "auto"};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => {
    if (props.padding) return props.padding;
    if (props.noPadding) return 0;
    if (props.paddingTopBottom) return `${props.paddingTopBottom} 0 ${props.paddingTopBottom} 0`;
    return "10px";
  }};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${
  (props) => props.hasShadow === "up" ? theme.colors.boxShadowUp 
  : props.hasShadow === "down" ? theme.colors.boxShadowDown 
  : props.boxShadow || "none"};
  border-radius: ${(props) => props.borderRadius === true ? '10px' : props.borderRadius};
  max-width: ${(props) => props.maxWidth || "100%"};
  min-width: ${(props) => props.minWidth};

  /* @media (min-width: ${device.xs}) {
    flex-direction: column;
    flex-wrap: wrap;
  } */
`;
