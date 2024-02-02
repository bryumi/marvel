import React from "react";
import { CloseButton, ModalContainer, ModalContent, ModalWrapper, PhotoContent } from './styles'
import { XCircle } from 'phosphor-react'

export function Modal ({ isOpen, onClose, card }) {

  if (!isOpen) return null;
  let details = null;
  function NumAppears(appears){
    return parseInt(appears.split(',').length);
  }
    switch (card.category) {
      case 1: 
          details = (
              <div>
                <p>Aparições: {card.appearsIn? NumAppears(card.appearsIn) : null}</p>
                <p>Aparece em: {card.appearsIn}</p>
                <p>Classificação dos fãs: {card.ratingOfFans}</p>
              </div>
          );
          break;
          case 2: 
          details = (
              <div>
                  <p>Disponível em: {card.availableIn}</p>
                  <p>Crítica: {card.review}</p>
              </div>
          );
          break;      
      case 3:
          details = (
              <div>
                  <p>Compra: {card.purchase}</p>
                  <p>Crítica: {card.review}</p>
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