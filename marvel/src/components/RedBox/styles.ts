import styled from "styled-components";

export const RedContainer = styled.div`
  width: 14rem;
  height: 6rem;
  background: ${(props) => props.theme['red']};

  h1{
    font-family: 'Marvel', sans-serif;
    font-size: 9rem;
    line-height: 8rem;
  }
`