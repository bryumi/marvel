import React from "react";
import { CloseButton, ModalContainer, ModalContent, ModalWrapper, PhotoContent, StarContainer, StyledStar } from './styles'
import { Star, XCircle } from 'phosphor-react'

export function Modal ({ isOpen, onClose, card }) {

  if (!isOpen) return null;
  let details = null;
  function NumAppears(appears){
    return parseInt(appears.split(',').length);
  }
  function StarsReview(num: number){
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<StyledStar key={i} filled={i < num} />);
    }
    return stars;
  }
    switch (card.category) {
      case 1: 
          details = (
              <div>
                <p>Aparições: {card.appearsIn? NumAppears(card.appearsIn) : null}</p>
                <p>Aparece em: {card.appearsIn}</p>
                <p>Classificação dos fãs: {StarsReview(card.review)}</p>
              </div>
          );
          break;
          case 2: 
          details = (
              <div>
                  <p>Disponível em: {card.availableIn}</p>
                  <p>Crítica: {StarsReview(card.review)}</p>
              </div>
          );
          break;      
      case 3:
          details = (
              <div>
                  <p>Compra: {card.purchase}</p>
                  <p>Crítica: {StarsReview(card.review)}</p>
              </div>
          );
          break;

      default:
          details = null;
    }
  
    return (
      <ModalWrapper isOpen={isOpen} onClick={onClose}>
        <ModalContainer>
            <PhotoContent>
                <img src={`${card.photo}`}/>
            </PhotoContent>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          {details}
            <CloseButton onClick={onClose}><XCircle size={32} /></CloseButton>
        </ModalContent>
        </ModalContainer>
      </ModalWrapper>
    );
  };