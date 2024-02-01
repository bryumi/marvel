import React from "react";
import { CloseButton, ModalContainer, ModalContent, ModalWrapper, PhotoContent } from './styles'
import { XCircle } from 'phosphor-react'

export function Modal ({ isOpen, onClose, card }) {
    if (!isOpen) return null;
  
    return (
      <ModalWrapper isOpen={isOpen} onClick={onClose}>
        <ModalContainer>
            <PhotoContent>
                <img src={`${card.photo}`}/>
            </PhotoContent>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
            <CloseButton onClick={onClose}><XCircle size={32} /></CloseButton>
        </ModalContent>
        </ModalContainer>
      </ModalWrapper>
    );
  };