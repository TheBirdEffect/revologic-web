import { styled } from "styled-components";
import { CustomText } from "./helpers/CustomText";

export const Text = styled(CustomText)`
  size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) =>
    props.bold ? "700" : props.weight ? props.weight : "400"};
  text-align: ${(props) => props.align};
`;
