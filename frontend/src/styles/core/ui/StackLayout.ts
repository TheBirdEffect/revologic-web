import styled from "styled-components";
import { PageItemWrapper as Wrapper } from "../../helpers/PageItemWrapper";
import { device } from "../../BreakPoints";


export const StackLayout = styled(Wrapper)`
  id: ${(props) => props.id};
  display: flex;
  gap: 1rem;
  flex-wrap: ${(props) => (props.wrap ? "wrap" : props.wrap)};
  width: ${(props) => props.width || "100%"};
  margin: ${(props) => props.margin || "0"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  padding: ${(props) => props.padding || "10px"};
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius === true ? '10px' : props.borderRadius};

  /* @media (min-width: ${device.xs}) {
    flex-direction: column;
    flex-wrap: wrap;
  } */
`;
