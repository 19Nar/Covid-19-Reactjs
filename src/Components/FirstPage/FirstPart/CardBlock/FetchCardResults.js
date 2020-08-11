import React, { useState, useEffect } from "react";

import CardResults from "./CardResults"

const FetchCardResults = () => {
    const [cardresults, setCardResults] = useState([]);

    useEffect(() => {
      fetch(`https://corona.lmao.ninja/v2/countries`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCardResults(data);
        });
    }, []);
  
    return (
        <div> 
            {cardresults &&
          cardresults.map((cardresult) => (
            <CardResults cardresults={cardresult} key={cardresult.id} />
          ))}
      </div>
    );
}

export default FetchCardResults
