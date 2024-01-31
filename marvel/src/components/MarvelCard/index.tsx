import React from "react";
import { CardContainer, DetailsButton, TextContent } from "./styles";

export interface Cards {
    id: number
    category: number,
    photo: string
    title: string
    text: string
}
interface CardProps {
    card: Cards
}
export function MarvelCard({ card }: CardProps){
    return(
        <CardContainer>
            <img src={`${card.photo}`}/>
            <TextContent>
                <span>
                    {card.title}
                </span>
                <p>{card.text}</p>
                <DetailsButton>Ver detalhes</DetailsButton>
            </TextContent>
        </CardContainer>
    )
}