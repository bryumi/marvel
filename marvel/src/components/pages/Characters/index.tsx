import React, { useCallback, useEffect, useState } from "react";
import { Header } from "../../Header";
import { MarvelCard } from "../../MarvelCard";
import { CharactersContainer } from "./styles";
import { charactersList } from "../../../data/charactersList"
import { ArrowRight} from 'phosphor-react'
export function Characters(){
    const [Cards, setCards] = useState(charactersList);
    const [allCards, setAllCards] = useState(charactersList);
    const [page, setPage] = useState(0);
    const [postsPerPage] = useState(1);

    const handleLoadCards = () =>{
    
        setCards(charactersList.slice(page, postsPerPage));
        setAllCards(charactersList);
      };
      useEffect(() => {
        handleLoadCards();
      }, [handleLoadCards, postsPerPage]);
    
      const loadMorePosts = () => {
        const nextPage = page + postsPerPage;
        const nextPosts = allCards.slice(nextPage, nextPage + postsPerPage);
        Cards.push(...nextPosts);
    
        setCards(Cards);
        setPage(nextPage);
      };
      const noMorePosts = page + postsPerPage >= allCards.length;
    return(
        <>
        <Header/>
        <CharactersContainer>
            {charactersList.map((character) => {
                return <MarvelCard key={character.id} card={character}/>
            })}
            <button onClick={loadMorePosts} disabled={noMorePosts}>
                <ArrowRight size={32} />
            </button>
        </CharactersContainer>
        </>
    )
}