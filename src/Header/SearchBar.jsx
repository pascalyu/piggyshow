import s from "./style.module.css"
import React from "react";
import {Search as SIcon} from "react-bootstrap-icons";

function SearchBar({searching}) {



    return (
        <>
            <SIcon className={s.sicon}></SIcon>
            <input onKeyUp={(event) => searching(event)} className={s.input} style={{width: "100%"}} type="text"
                   placeholder="what do you want to see?">

            </input>
        </>
    );
}

export default SearchBar;
