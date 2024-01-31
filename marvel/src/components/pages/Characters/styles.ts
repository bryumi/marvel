import styled, {keyframes, css} from "styled-components";



export const CharactersContainer = styled.main`
    height: 48rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    overflow-x: auto;
    transition: transform 0.3s ease-in-out;
    `
    export const ArrowButton = styled.button`
      border: none;
      color: ${(props) => props.theme['red']};
      background-color: inherit;
      cursor: pointer;
      
      :hover {
        color: ${(props) => props.theme['gray100']};
        transition: 0.2s;
      }
      :disabled {
        color: ${(props) => props.theme['black']};
      }
    `