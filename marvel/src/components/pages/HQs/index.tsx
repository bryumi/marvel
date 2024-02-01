import React, { useEffect, useState } from "react";
import { Header } from "../../Header";
import { ArrowButtonHq, HqsContainer } from "./styles";
import { Cards, MarvelCard } from "../../MarvelCard";
import { hqList } from "../../../data/hqList";
import { ArrowLeft, ArrowRight } from "phosphor-react";

interface Hq extends Cards {
  purchase?: string
  review?: number 
}
export function HQs(){
  const [cardsToShow, setCardsToShow] = useState<Hq[]>([]);
  const [page, setPage] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(3);
  const cardsPerPage = 3;

  const filterCardsByCategory = (category: number): Cards[] => {
    if (!category) return hqList; 
    return hqList.filter((card) => card.category === category);
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
        hidden: index !== 0 
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
        <HqsContainer>
        {showLeftArrow && <ArrowButtonHq onClick={handleScrollLeft}><ArrowLeft size={32} /></ArrowButtonHq>}
          {cardsToShow.map((hq) => (
            <MarvelCard key={hq.id} card={hq} />
          ))}
            <ArrowButtonHq onClick={handleLoadMore} disabled={noMoreCards}>
                <ArrowRight size={32} />
            </ArrowButtonHq>
        </HqsContainer>
        </>
    )
}