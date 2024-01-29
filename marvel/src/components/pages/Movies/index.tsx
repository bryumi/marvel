import React from "react";
import { Header } from "../../Header";
import { MoviesContainer } from "./styles";
import { moviesList } from "../../../data/moviesList"
import { MarvelCard } from "../../MarvelCard";

export function Movies(){
    return(
        <>
        <Header />
        <MoviesContainer>
            {moviesList.map((movie) => {
                return <MarvelCard key={movie.id}
                card={movie}/>
            })}           
        </MoviesContainer>
        </>
    )
}