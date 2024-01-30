import React, { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "../../Header";
import { MarvelCard, Cards } from "../../MarvelCard";
import { CharactersContainer } from "./styles";
import { charactersList } from "../../../data/charactersList"
import { ArrowLeft, ArrowRight} from 'phosphor-react'
import { CardContainer } from "../../MarvelCard/styles";
interface Character extends Cards{

}
export function Characters(){
  const [cardsToShow, setCardsToShow] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const cardsPerPage = 2;

  useEffect(() => {
    loopCards();
  }, [page]);

  useEffect(() => {
    setShowLeftArrow(page > 1); 
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

  function handleScrollLeft() {
    setPage((prevPage) => prevPage - 1);
  }
  const noMoreCards = page + cardsPerPage >= charactersList.length;

    return(
        <>
        <Header/>
        <CharactersContainer>
  
        {showLeftArrow && <button onClick={handleScrollLeft}><ArrowLeft size={32} /></button>}
          {cardsToShow.map((character) => (
            <MarvelCard key={character.id} card={character} />
          ))}
            <button onClick={handleLoadMore} disabled={noMoreCards}>
                <ArrowRight size={32} />
            </button>
        </CharactersContainer>
        </>
    )
}