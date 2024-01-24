import styled from "styled-components";
export const AllContainer = styled.body`
    display: flex;

`
export const LoginContainer = styled.div`
    width: 50vw;
    height: 100vh;
    padding: 9rem;
`
export const SecondContainer = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h3{
        font-family: 'Inter', sans-serif;
        color: ${(props) => props.theme['red']};
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    p {
        color: ${(props) => props.theme['gray100']};
    }

    input{
        width: 23rem;
        height: 4rem;
        border-radius: 50px;
        border: none;
        margin: 0.5rem;
        color: ${(props) => props.theme['gray-100']};
    }
`

export const SaveForgot = styled.div``

export const LogIn = styled.div``