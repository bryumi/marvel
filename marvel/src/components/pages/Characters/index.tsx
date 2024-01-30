import React, { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "../../Header";
import { MarvelCard, Cards } from "../../MarvelCard";
import { CharactersContainer } from "./styles";
import { charactersList } from "../../../data/charactersList"
import { ArrowRight} from 'phosphor-react'
import { CardContainer } from "../../MarvelCard/styles";

interface Character extends Cards{

}

export function Characters(){
  const [cardsToShow, setCardsToShow] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const cardsPerPage = 2;

  useEffect(() => {
    loopCards();
  }, [page]);

  function loopCards() {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const newCards = charactersList
      .slice(startIndex, endIndex)
      .map((card, index) => ({
        ...card,
        hidden: index !== 0 // Oculta todos os cards, exceto o primeiro na nova página
      }));
      setCardsToShow(newCards);
  }

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }
    return(
        <>
        <Header/>
        <CharactersContainer>
          {cardsToShow.map((character) => (
            <MarvelCard key={character.id} card={character} />
          ))}
            <button onClick={handleLoadMore} >
                <ArrowRight size={32} />
            </button>
        </CharactersContainer>
        </>
    )
}