import styled from "styled-components";
import { CustomImage } from "../helpers/Image";

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

export const ProfileImage = styled(CustomImage)`
    width: 200px;
    height: 300px;
    padding: 10px;
    object-fit: scale-down;
    src: ${(props) => props.src};
    alt: ${(props) => props.alt};
`
export const GalleryImage = styled(CustomImage)`
    width: 110px;
    height: auto;
`

export const CorpLogo = styled(CustomImage)`
    width: 80%;
    height: auto;
`

export const MenuIcon = styled(CustomImage)`
    width: 30px;
    height: 30px;
`
