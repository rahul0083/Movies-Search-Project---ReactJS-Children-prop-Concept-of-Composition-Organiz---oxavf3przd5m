import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState([]);

    function handleClick(e) {
      let array= movies.filter((element,index)=>{
        if(element.title===inputValue){
            return element.title;
        }
       })
       setResult([...array])
        
    }

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <div id="main">
            <form id="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"/>
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {results &&
                    results.map((movie,index) => (
                        <div key={index} className="movie">{movie.title}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;
