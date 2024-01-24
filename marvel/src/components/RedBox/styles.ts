import styled from "styled-components";

export const RedContainer = styled.div`
  width: 14rem;
  height: 6rem;
  background: ${(props) => props.theme['red']};
  

  h1{
    text-decoration: none;
    font-family: 'Marvel', sans-serif;
    font-size: 7rem;
    line-height: 6rem;
    color: ${(props) => props.theme['white']};
  }
`