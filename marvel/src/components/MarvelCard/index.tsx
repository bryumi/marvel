import React, { useState } from "react";
import { CardContainer, DetailsButton, TextContent } from "./styles";
import { Modal } from "../DetailsModal";

export interface Cards {
    id: number
    category: number,
    photo: string
    title: string
    text: string
    review?: number 
}
interface CardProps {
    card: Cards
}
export function MarvelCard({ card }: CardProps){
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedCard, setSelectedCard] = useState(null);
      
        // Handle opening modal
        const handleOpenModal = (card) => {
          setSelectedCard(card);
          setIsModalOpen(true);
        };
      
        // Handle closing modal
        const handleCloseModal = () => {
          setIsModalOpen(false);
        };
    return(
        <CardContainer>
            <img src={`${card.photo}`}/>
            <TextContent>
                <span>
                    {card.title}
                </span>
                <p>{card.text}</p>
                <DetailsButton onClick={() => handleOpenModal(card)}>Ver detalhes</DetailsButton>
            </TextContent>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} card={selectedCard} />
        </CardContainer>
    )
}