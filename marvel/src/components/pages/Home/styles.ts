import styled from 'styled-components'

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    padding: 21rem 36rem;
    background: ${(props) => props.theme['black']};
    
    a{
        text-decoration: none;
        cursor: pointer;
    }
  
`
