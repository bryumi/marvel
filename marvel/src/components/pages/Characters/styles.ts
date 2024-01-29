import styled from "styled-components";

export const CharactersContainer = styled.main`
    height: 48rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    button{
        border: none;
        color: ${(props) => props.theme['red']};
        background-color: inherit;
        cursor: pointer;
    }
    
  button:hover {
    color: ${(props) => props.theme['gray100']};
    transition: 0.2s;
  }
`