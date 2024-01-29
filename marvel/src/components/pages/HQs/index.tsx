import React from "react";
import { Header } from "../../Header";
import { HqsContainer } from "./styles";
import { hqsList } from "../../../data/hqsList"
import { MarvelCard } from "../../MarvelCard";

export function HQs(){
    return(
        <>
        <Header />
        <HqsContainer>
            {hqsList.map((hq) =>{
                return <MarvelCard key={hq.id} card={hq} />            })}
        </HqsContainer>
        </>
    )
}