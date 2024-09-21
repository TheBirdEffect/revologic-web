import styled from "styled-components";
import { CustomImage } from "../helpers/Image";

// export const Image = styled.img`
//     width: 100%;
//     height: 300px;
//     padding: 10px;
//     border-radius: ${(props) => props. ? '50%' : '0'};
//     object-fit: cover;
//     src: ${(props) => props.src};
//     alt: ${(props) => props.alt};
// `;

export const Image = styled(CustomImage)`
    width: 100%;
    height: 300px;
    padding: 10px;
    border-radius: 10px;
    object-fit: cover;
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
`;

export const RoundImage = styled(CustomImage)`
    width: 250px;
    height: 250px;
    padding: 10px;
    border-radius: 50%;
    object-fit: cover;
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
`