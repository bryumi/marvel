import React from "react";
import { HomeImageContainer, TitleContainer } from "./styles";
import { RedBox } from "../../RedBox";
import { ImageHome } from "../../ImageHome";
import { Link } from "react-router-dom";

export function HomeImage() {
    return (
    <HomeImageContainer>
        <TitleContainer>
            <Link to="/login">
                <RedBox/>
            </Link>
        </TitleContainer>
        <ImageHome/>
    </HomeImageContainer>
    )
}