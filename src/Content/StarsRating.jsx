import React from "react";
import {StarFill, Star, StarHalf} from 'react-bootstrap-icons';

function StarsRating({rate}) {

    function isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }

    let StarsFills = Number.parseInt(rate ? rate : 0);
    if (isFloat(rate)) {
        StarsFills = StarsFills - 1;
    }
    let StarsEmpties = 5 - Number.parseInt(rate ? rate : 0);

    return (
        <>
            {[...Array(StarsFills)].map((star, index) => {

                return (
                    <StarFill key={index}></StarFill>
                );
            })}
            {isFloat(rate) && (<StarHalf></StarHalf>)}
            {[...Array(StarsEmpties)].map((star, index) => (
                    <Star key={index}></Star>
                )
            )}
            <span>{rate}</span>
        </>
    )
        ;
}

export default StarsRating;
