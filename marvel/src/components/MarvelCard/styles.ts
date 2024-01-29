import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    width: 18rem;
    height: 27rem;
`
export const TextContent = styled.div`
    width: 18rem;
    height: 13.5rem;
    position: absolute;

    background-color: ${(props) => props.theme['red']}; 
    opacity: 0.8;
    border-radius: 30px;
    padding: 1.75rem;
    margin-top: -219.5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    font-family: 'Inter', sans-serif;
    
    span{
        font-size: 1.25rem;
        color: ${(props) => props.theme['white']};
    }
    p{
        font-size: 0.75rem;
        line-height: 1rem;
    }
    button{
        
        color: ${(props) => props.theme['white']};
        font-size: 1.25rem;
        border: none;
        background-color: ${(props) => props.theme['red']}; 
    }
`
