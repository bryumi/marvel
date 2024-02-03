import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 7.125rem;
  padding: 3.5rem;
  display: flex;
 justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid transparent;
  box-shadow: 2px 1px 9px 0px rgba(255, 0, 0, 1);
`
export const LogoContent = styled.div`
  width: 7.5rem;
  height: 3.25rem;
  background-color:${(props) => props.theme['red']};
  span{
    width: 7rem;
    height: 3rem;
  }
  p{ 
    font-family: 'Marvel', sans-serif;
    font-size: 5rem;
    line-height: 5rem;
    color: ${(props) => props.theme['white']};
  }
`
export const NavContent = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
  a{
    text-decoration: none;
    color: ${(props) => props.theme['gray200']};
    font-size: 1.75rem;
  }
  a:hover {
        transition: 0.2s;
        color: ${(props) => props.theme['white']};
  }
 a:active{
    color: ${(props) => props.theme['white']};
 }
  span{
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`