import React,   { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'


export default function MoviesTable({movieFetch, setMovieFetch}){
    const [yearAscending, setYearAscending] = useState(null);
    const [ratingAscending, setRatingAscending] = useState(null);

    useEffect(() => {
        yearAscending != null && setMovieFetch(
            movieFetch.sort((a, b) => yearAscending == true ? a.year - b.year : b.year - a.year)
            )
        }, [yearAscending])

    useEffect(() => {
        ratingAscending != null &&  setMovieFetch(
            movieFetch.sort((a, b) => ratingAscending == true ? a.rating - b.rating : b.rating - a.rating)
            )
        }, [ratingAscending])

    return(     
        <div className={styles.container}>
            <table className={styles.movieTableContainer}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th onClick={() => setYearAscending(!yearAscending)} >
                            <p>
                                Year {yearAscending != null && <FontAwesomeIcon icon={ !yearAscending ? faCaretUp : faCaretDown} />}
                            </p>
                        </th>
                        <th>
                            Genres
                        </th>
                        <th onClick={() => setRatingAscending(!ratingAscending)} >
                            <p>
                                Rating {ratingAscending != null && <FontAwesomeIcon icon={ !ratingAscending ? faCaretUp : faCaretDown} />}
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                    {movieFetch && movieFetch.map((movie, index) =>
                            <tr key={index}>
                                <td>{movie.title}</td>
                                <td>{movie.year}</td>
                                <td> {movie.genres} </td>
                                <td title={movie.quantity + ' ratings'} >{movie.rating.toFixed(2)}</td>
                            </tr>       
                        )}
                </tbody>
            </table>
        </div>
    )
}