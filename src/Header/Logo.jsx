import s from "./style.module.css"
import React from "react";

function Logo(props) {
    return (
        <>
            <div>
                <img src={props.img} className={s.img}/>
                <span className={s.title}>{props.title}</span>


            </div>
            <span className={s.subtitle}>{props.subtitle}</span>
        </>
    );
}

export default Logo;
