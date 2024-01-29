import React from "react";
import { CardContainer, TextContent } from "./styles";

export interface Cards {
    id: number
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
                <button>Ver detalhes</button>
            </TextContent>
        </CardContainer>
    )
}