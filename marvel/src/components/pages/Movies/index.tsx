import React, { useEffect, useState } from "react";
import { Header } from "../../Header";
import { ArrowButtonMov, MoviesContainer, PageWrapper, SelectFilter } from "./styles";
import { Cards, MarvelCard } from "../../MarvelCard";
import { movieList } from "../../../data/movieList";
import { ArrowLeft, ArrowRight } from "phosphor-react";

interface Movie extends Cards {
  availableIn?: string
  chronology?: number
  release?: number
}
export function Movies(){
  const [cardsToShow, setCardsToShow] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [filterOption, setFilterOption] = useState("");
  const cardsPerPage = 3;

  function  filterAndSortMovies (movies: Movie[]): Movie[]
  {
    if (filterOption === "chronology") {
      return movies.sort((a, b) => (a.chronology || 0) - (b.chronology || 0));
    } else if (filterOption === "release") {
      return movies.sort((a, b) => (a.release || 0) - (b.release || 0));
    } else {
      return movies;
    }
  };
  const calculateTotalCards = (movies: Movie[]): number => {
    return filterAndSortMovies(movies).length;
  };
  useEffect(() => {
    loopCards();
  }, [page, filterOption]);

  useEffect(() => {
    setShowLeftArrow(page > 1); 
  }, [page]);

  function loopCards() {
    const filteredCards = filterAndSortMovies(movieList);
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
  const totalCards = calculateTotalCards(movieList)
  const noMoreCards = page * cardsPerPage >= totalCards;
    return(
        <>
        <PageWrapper>
          <Header /> 
            <SelectFilter
            value={filterOption}
            onChange={(e) => {
              setFilterOption(e.target.value);
            }}
          >
              <option value="">Todos</option>
              <option value="chronology">Cronologia</option>
              <option value="release">Lançamento</option>
          </SelectFilter>
              <MoviesContainer>
              {showLeftArrow && <ArrowButtonMov onClick={handleScrollLeft}><ArrowLeft size={32} /></ArrowButtonMov>}
                {cardsToShow.map((movie) => (
                  <MarvelCard key={movie.id} card={movie} />
                ))}
                  <ArrowButtonMov onClick={handleLoadMore} disabled={noMoreCards}>
                      <ArrowRight size={32} />
                  </ArrowButtonMov>
              </MoviesContainer>
          </PageWrapper>
          
        </>
    )
}