import styled from "styled-components";
import imageHome from "../../assets/image-home.png";

export const ImageContent = styled.div`
     width: 50vw;
    height: 100vh;
    -webkit-mask-image: linear-gradient(to left, transparent 5%, ${(props) => props.theme['black']} 100%);
    background-image: url(${imageHome});
    opacity: 50%;
`