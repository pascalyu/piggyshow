import React from "react";
import s from "./style.module.css";
import StarsRating from "./StarsRating";

function Content({currentTvShow}) {


    const convertTOStarsRating = (voteAverage) => {
        return (voteAverage * 5) / 10;
    };
    let rate = 0;
    if (currentTvShow) {
        rate = convertTOStarsRating(currentTvShow['vote_average']);
    }
    return (
        <>
            {currentTvShow && (<div className={s.mycontainer}>
                <h1>{currentTvShow['name']}</h1>
                <StarsRating rate={rate}></StarsRating>
                <div>{currentTvShow['overview']}</div>


            </div>)
            }

        </>
    )
        ;
}

export default Content;
