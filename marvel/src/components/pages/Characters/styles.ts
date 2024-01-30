import styled from "styled-components";

export const CharactersContainer = styled.main`
    height: 48rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
const CardContainer = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.5s ease-out;

  ${(props) => props.hidden && `
    transform: translateX(-100%);
  `}
`;