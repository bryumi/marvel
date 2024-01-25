import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 7.125rem;
  padding: 3.5rem;
  display: flex;
 justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid transparent;
  border-bottom-color:${(props) => props.theme['red']};
`
export const LogoContent = styled.div`
  width: 7.5rem;
  height: 3.25rem;
  background: ${(props) => props.theme['red']};
  p{
    text-decoration: none;
    font-family: 'Marvel', sans-serif;
    font-size: 6.25rem;
    line-height: 6rem;
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