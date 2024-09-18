import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    height: 300px;
    padding: 10px;
    border-radius: 10px;
    object-fit: cover;
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
`;