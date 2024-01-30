import React, { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "../../Header";
import { MarvelCard, Cards } from "../../MarvelCard";
import { CharactersContainer } from "./styles";
import { List } from "../../../data/List"
import { ArrowLeft, ArrowRight} from 'phosphor-react'
import { CardContainer } from "../../MarvelCard/styles";
interface Character extends Cards{

}
export function Characters(){
  const [cardsToShow, setCardsToShow] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(1);
  const cardsPerPage = 2;

  const filterCardsByCategory = (category: number): Cards[] => {
    if (!category) return List; 
    return List.filter((card) => card.category === category);
  }

  const calculateTotalCardsForCategory = (category: number): number => {
    return filterCardsByCategory(category).length;
  };
  useEffect(() => {
    loopCards();
  }, [page]);

  useEffect(() => {
    setShowLeftArrow(page > 1); 
  }, [page]);

  function loopCards() {
    const filteredCards = filterCardsByCategory(currentCategory);
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const newCards = filteredCards
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
  const totalCardsForCategory = calculateTotalCardsForCategory(currentCategory);

  const noMoreCards = page * cardsPerPage >= totalCardsForCategory;

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