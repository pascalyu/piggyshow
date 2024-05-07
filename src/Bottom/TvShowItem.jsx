import React from "react";
import s from "./style.module.css";
import {BACKDROP_URL} from "../Api/TvShowApi";

function TvShowItem({tvShowItem, changeCurrentTvShow}) {
    return (
        <>
            <div className={s.card} onClick={()=> changeCurrentTvShow(tvShowItem)}>
                <img className={s.img} src={`${BACKDROP_URL}w300/${tvShowItem['backdrop_path']}`}></img>
                <div className={s.cardTitle}>{tvShowItem['name']}</div>
            </div>
        </>
    );
}

export default TvShowItem;
