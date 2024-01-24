import React from "react";
import { ImageHome } from "../../ImageHome";
import { AllContainer, InputContainer, LogIn, LoginContainer, SaveForgot, SecondContainer } from "./styles";
import { RedBox } from "../../RedBox";

export function Login (){
    return(
        <AllContainer>

        <LoginContainer>
            <RedBox>
            </RedBox>
            <SecondContainer>
                <h3>Bem-vindo(a) de volta</h3>
                <InputContainer>
                <p>Acesse sua conta</p>
                <input type="text" />
                <input type="text" />
                </InputContainer>
                <SaveForgot>
                    <input type="checkbox" name="" id="" />
                    <p>Esqueci a senha</p>
                </SaveForgot>
                <LogIn>
                    <button>Entrar</button>
                    <span>
                        <p>Ainda não tem o login</p>
                        <a>Cadastre-se</a>
                    </span>
                </LogIn>
            </SecondContainer>
        </LoginContainer>
        <ImageHome/>
        
        </AllContainer>
    )
}