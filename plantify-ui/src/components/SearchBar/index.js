import style from "./index.module.scss";

import searchIcon from "../../icons/search-icon.svg";
import { useState, useContext } from "react";
import { SearchContext } from "../../contexts";
import { Link } from "react-router-dom";

export const SearchBar = () => {
    const { searchState } = useContext(SearchContext);
    const [query, setQuery] = searchState;
    const handleChange = (e) => {
        setQuery(e.currentTarget.value);
    };
    return (
        <form className={style.search}>
            <input
                onChange={(e) => {
                    handleChange(e);
                }}
                type="text"
            />
            <Link to="/searchresults">
                <button>
                    <img src={searchIcon} alt="search icon" />
                </button>
            </Link>
        </form>
    );
};
