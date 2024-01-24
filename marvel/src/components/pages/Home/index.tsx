import React from "react";
import { HomeContainer } from "./styles";
import { RedBox } from "../../RedBox";
import { Link} from "react-router-dom";

export function Home() {
    return (
    <HomeContainer>
        <Link to="/home">
            <RedBox/>
        </Link>
    </HomeContainer>
    )
}