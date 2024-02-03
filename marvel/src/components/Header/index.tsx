import React from 'react'
import { HeaderContainer, LogoContent, NavContent } from './styles'
import { NavLink } from 'react-router-dom'
import profilePicture from "../../assets/profile-picture.png";


export function Header() {
  return (
    <HeaderContainer>
        <LogoContent>
          <span>
            <p>Mar
              vel</p>
          </span>
        </LogoContent>
      <NavContent>  
        <NavLink to="/characters">Personagens</NavLink>
        <NavLink to="/movies">Filmes</NavLink>
        <NavLink to="/hq">HQs</NavLink>
        <span>
          <img src={profilePicture} alt="" />
          <a>Sair</a>
        </span>

      </NavContent>
    </HeaderContainer>
  )
}