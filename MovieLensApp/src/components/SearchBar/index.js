import React,   { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function SearchBar({setFetchData}){
    const {siteConfig} = useDocusaurusContext();
    const [titleSearch, setTitleSearch] = useState('')
    const [yearSearch, setYearSearch] = useState('')
    const [genreSearch, setGenreSearch] = useState('')
    const [topSearch, setTopSearch] = useState()

    function search() {
        fetch(`${siteConfig.url}/search?title=${titleSearch}&year=${yearSearch}&genre=${genreSearch}&top=${topSearch}`)
        .then((response) => response.json())
        .then((searched) => setFetchData(searched))
    }


    return(
        <div className={styles.container}>
            <input onChange={(e) => setTitleSearch(e.target.value)}
            placeholder="Search title...">
            </input>
            <input onChange={(e) => setGenreSearch(e.target.value)}
            placeholder="Genres...">
            </input>
            <input type="number" min="1800" max="2099" step="1" onChange={(e) => setYearSearch(e.target.value)}
            placeholder="1995">
            </input>
            <input type="number" min="  1900" max="2099" step="1" onChange={(e) => setTopSearch(e.target.value)}
            placeholder="Qtt">
            </input>
            <button onClick={search}>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
        </div>
    )
}