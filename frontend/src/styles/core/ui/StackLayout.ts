import styled from "styled-components";
import { PageItemWrapper as Wrapper } from "../../helpers/PageItemWrapper";
import { theme } from "../../Theme";
import { device } from "../../BreakPoints";


export const StackLayout = styled(Wrapper)`
  id: ${(props) => props.id};
  display: flex;
  gap: 1rem;
  padding: 10px;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  background-color: ${(props) => props.backgroundColor || theme.colors.white};
  border-radius: ${(props) => props.borderRadius || "10px"};

  @media (min-width: ${device.xs}) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
