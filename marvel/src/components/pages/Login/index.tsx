import React from "react";
import { ImageHome } from "../../ImageHome";
import { AllContainer, Forgot, InputContainer, LogIn, LogInButton, LoginContainer, SaveForgot, SecondContainer, TextContained, TitleContent } from "./styles";
import { RedBox } from "../../RedBox";
import { NavLink } from "react-router-dom";

export function Login (){
    return(
        <AllContainer>

        <LoginContainer>
            <TitleContent>
                <RedBox>
                </RedBox>
            </TitleContent>
            <SecondContainer>
                <h3>Bem-vindo(a) de volta</h3>
                <InputContainer>
                <TextContained>
                    <p>Acesse sua conta</p>
                </TextContained>
                    <input type="text" placeholder="Usuário" />
                    <input type="text" placeholder="Senha"/>
                </InputContainer>
                <SaveForgot>
                    <span>
                        <input type="checkbox" name="save" id="save" />
                        <label htmlFor="save">Salvar login</label>
                    </span>
                    <Forgot>
                        <p>Esqueci a senha</p>
                        <span>_________________</span>
                    </Forgot>
                </SaveForgot>
                <LogIn>
                   <NavLink to="/characters">
                        <LogInButton>Entrar</LogInButton>
                    </NavLink> 
                    <span>
                        <p>Ainda não tem o login?</p>
                        <a> Cadastre-se</a>
                    </span>
                </LogIn>
            </SecondContainer>
        </LoginContainer>
        <ImageHome/>
        
        </AllContainer>
    )
}