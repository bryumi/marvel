import styled from "styled-components";
export const AllContainer = styled.body`
    display: flex;

`
export const LoginContainer = styled.div`
    width: 50vw;
    height: 100vh;
    padding: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const TitleContent = styled.div`
    margin-bottom: 2.25rem;
`
export const SecondContainer = styled.div`
    height: 50vh;
    width: 23rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 2.25rem;

    h3{
        font-family: 'Inter', sans-serif;
        color: ${(props) => props.theme['red']};
        font-size: 2rem;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    p {
        color: ${(props) => props.theme['gray100']};
        font-size: 1.25rem;
        
    }
    
    input{
        width: 23rem;
        height: 4.5rem;
        border-radius: 50px;
        border: none;
        margin: 0.5rem;
        padding: 1.75rem;
        color: ${(props) => props.theme['gray100']};
        font-size: 1.25rem;
    }
`
export const TextContained= styled.span`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-self: flex-start;
    
`
export const SaveForgot = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    margin: 1rem;
    color: ${(props) => props.theme['gray100']};
    span{
        input{
            margin-right: 1rem;
        }
    }
  
`
export const Forgot = styled.div`
    display: flex;
    flex-direction: column;
    span{
        color: ${(props) => props.theme['red']};
    }
`
export const LogIn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme['gray100']};
    button{
        height: 4.5rem;
        background: ${(props) => props.theme['red']};
        color: ${(props) => props.theme['white']};
        font-size: 1.75rem;
        border-radius: 50px;
        border: none;
        margin-bottom: 1rem;
    }
    span{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 1rem;

        a{
            color: ${(props) => props.theme['red']};
            cursor: pointer;
        }
    }
`