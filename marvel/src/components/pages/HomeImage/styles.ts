import styled from 'styled-components'


export const HomeImageContainer = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-between;
    
    background: ${(props) => props.theme['black']};

`
export const TitleContainer = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        text-decoration: none;
    }
   
`