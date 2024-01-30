import styled from "styled-components";

export const HqsContainer = styled.section`
    height: 48rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    justify-content: space-evenly;
    flex-direction: row;
    overflow-x: auto;
    transition: transform 0.3s ease-in-out;

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
  button:disabled {
    color: ${(props) => props.theme['black']};
  }
`