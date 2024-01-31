import React, { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "../../Header";
import { MarvelCard, Cards } from "../../MarvelCard";
import { ArrowButton, CharactersContainer } from "./styles";
import { characterList } from "../../../data/characterList"
import { ArrowLeft, ArrowRight} from 'phosphor-react'
import { CardContainer } from "../../MarvelCard/styles";
interface Character extends Cards{
  aparicoes?: string
  avaliacaoFas?: number
}
export function Characters(){
  const [cardsToShow, setCardsToShow] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(1);
  const cardsPerPage = 3;

  const filterCardsByCategory = (category: number): Cards[] => {
    if (!category) return characterList; 
    return characterList.filter((card) => card.category === category);
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
  
        {showLeftArrow && <ArrowButton onClick={handleScrollLeft}><ArrowLeft size={32} /></ArrowButton>}
          {cardsToShow.map((character) => (
            <MarvelCard key={character.id} card={character} />
          ))}
      
            <ArrowButton onClick={handleLoadMore} disabled={noMoreCards}>
                <ArrowRight size={32} />
            </ArrowButton>
      
        </CharactersContainer>
        </>
    )
}