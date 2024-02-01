import React, { useEffect, useState } from "react";
import { Header } from "../../Header";
import { ArrowButtonMov, MoviesContainer } from "./styles";
import { Cards, MarvelCard } from "../../MarvelCard";
import { movieList } from "../../../data/movieList";
import { ArrowLeft, ArrowRight } from "phosphor-react";

interface Movie extends Cards {
  availableIn?: string
  review?: number 
  chronology?: number
  release?: number
}
export function Movies(){
  const [cardsToShow, setCardsToShow] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(2);
  const cardsPerPage = 3;

  const filterCardsByCategory = (category: number): Cards[] => {
    if (!category) return movieList; 
    return movieList.filter((card) => card.category === category);
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