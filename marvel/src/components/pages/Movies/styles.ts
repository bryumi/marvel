import styled from "styled-components";
export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
export const MoviesContainer = styled.section`
    height: 48rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: auto;
    transition: transform 0.3s ease-in-out;
    margin-top: -6rem;

`
export const ArrowButtonMov = styled.button`
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
export const SelectFilter = styled.select`
  width: 10rem;
  height: 3rem;
  padding: 0.75rem;
  color: ${(props) => props.theme['red']};
  background-color: inherit;
  border: 1px solid; 
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  margin-top: 6rem;
  margin-left: 1.5rem;
  z-index: 999;

  
  option {
    background-color: ${(props) => props.theme['black']};
    padding: 0.5rem;
    font-family: inherit;

  }
`
