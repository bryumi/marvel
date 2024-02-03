import { Star } from "phosphor-react";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 9999999;

  backdrop-filter: blur(5px);
`;
export const ModalContainer= styled.section`
  
  border-radius: 20px;
  

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;

  background: rgb(0,0,0);
  background: linear-gradient(156deg, rgba(0,0,0,0.6502976190476191) 0%, rgba(255,0,0,1) 100%);

`
export const PhotoContent = styled.div`
  img{ 
      height: 27.25rem;
      width: 18.25rem;
  }
`
export const ModalContent = styled.div`
  height: 27rem;
  width: 23rem;
  padding: 3.5rem;
  border-radius: 5px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2{
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
  }
`;

export const CloseButton = styled.button`
    position: fixed;
    top: 24rem;
    left: 37rem;
    background-color: inherit;
    border: none;

    color: ${(props) => props.theme['white']};;
    cursor: pointer;

    :hover{
      color: ${(props) => props.theme['black']};
    }
`
export const StyledStar = styled(Star)`
color: ${({ filled }) => (filled ? '#FFB300' : '#84848D')}; /* Cor da estrela preenchida ou vazia */
`