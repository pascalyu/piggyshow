import React, { useState, useEffect } from 'react';

import Header from "./Header/Header";
import Bottom from "./Bottom/Bottom";
import Content from "./Content/Content";
import "./global.css";
import {BACKDROP_URL, TvShowApi} from "./Api/TvShowApi";
//
function App() {
    const [currentTvShow, setCurrentTvShow] = useState();
    const [recommendedTvShow, setRecommendedTvShow] = useState();

    async function getCurrentTvShow(){
        const popularsTvShow = await TvShowApi.fetchPopularTvShow();
        setCurrentTvShow(popularsTvShow[0]);
    }
    async function getRecommendedTvShow(seriesId){
        const result = await TvShowApi.fetchRecommendedTvShow(seriesId);
        setRecommendedTvShow(result);
    }

    async function getTvSHowFromName(name){
        const result = await TvShowApi.fetchTvShowFromName(name);
        if(result.length>0){
          setCurrentTvShow(result[0]);
        }
    }


    useEffect(()=>{
        getCurrentTvShow();

    }, []);
    useEffect(()=>{
        currentTvShow && getRecommendedTvShow(currentTvShow['id']);
    }, [currentTvShow]);

    function changeCurrentTvShow(selectedTvShow){
        setCurrentTvShow(selectedTvShow);
    }
    function searching(event) {
        if(event.code ==="Enter"){
            getTvSHowFromName(event.target.value);
        }
    }
    return (
        <div className="main_container" style={currentTvShow && {background :`linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_URL}original${currentTvShow.backdrop_path}") no-repeat center / cover`}}>
            <Header searching={searching}></Header>

            <Content currentTvShow={currentTvShow}></Content>

            <Bottom recommendedTvShow={recommendedTvShow} changeCurrentTvShow={changeCurrentTvShow}></Bottom>

        </div>
    );
}

export default App;
