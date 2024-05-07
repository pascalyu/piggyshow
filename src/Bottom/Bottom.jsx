import React from "react";
import s from "./style.module.css";
import TvShowListItems from "./TvShowListItems";

function Bottom({recommendedTvShow, changeCurrentTvShow}) {
    return (
        <div className={s.mycontainer}>
            <div>Recommended tv shows</div>
            <TvShowListItems recommendedTvShow={recommendedTvShow} changeCurrentTvShow={changeCurrentTvShow}></TvShowListItems>
        </div>
    );
}

export default Bottom;
