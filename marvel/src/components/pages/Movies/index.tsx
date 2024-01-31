import React, { useEffect, useState } from "react";
import { Header } from "../../Header";
import { ArrowButtonMov, MoviesContainer } from "./styles";
import { Cards, MarvelCard } from "../../MarvelCard";
import { List } from "../../../data/List";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { ArrowButton } from "../Characters/styles";

export function Movies(){
  const [cardsToShow, setCardsToShow] = useState<Cards[]>([]);
  const [page, setPage] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(2);
  const cardsPerPage = 3;

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
        <Header />
        <MoviesContainer>
        {showLeftArrow && <ArrowButtonMov onClick={handleScrollLeft}><ArrowLeft size={32} /></ArrowButtonMov>}
          {cardsToShow.map((movie) => (
            <MarvelCard key={movie.id} card={movie} />
          ))}
            <ArrowButtonMov onClick={handleLoadMore} disabled={noMoreCards}>
                <ArrowRight size={32} />
            </ArrowButtonMov>
        </MoviesContainer>
        
        </>
    )
}