import s from "./style.module.css"
import React from "react";
import Logo from "./Logo";
import mylogo from "../assets/img/logo.png"
import SearchBar from "./SearchBar";
function Header({searching}) {
    return (
        <div className={s.mycontainer}>
            <div className="row">
                <div className="col-4">
                    <Logo title="PiggyWatch" subtitle="for pigs only" img={mylogo} ></Logo>
                </div>
                <div className="col-md-12 col-lg-4">

                    <SearchBar searching={searching}></SearchBar>
                </div>



            </div>
        </div>
    );
}

export default Header;
