import React, { useState, useEffect } from "react";

import CardResults from "./CardResults"

const FetchCardResults = () => {
    const [items, setCardResults] = useState([]);

    useEffect(() => {
      fetch(`https://corona.lmao.ninja/v2/countries`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setCardResults(response.data);
        });
    }, []);
  
    return (
        <div> 
            {items &&
          items.map((item) => (
            <CardResults items={item} key={item.id} />
          ))}
      </div>
    );
}

export default FetchCardResults
