import React from "react";

const GifGrid = ({ category }) => {
    const getGif = async() => {
        const url = 'https://giphy.com/gifs/one-piece-YWB6Hi29vA3jG';
        const resp = await fetch(url);
        const data = await resp.json();
    
        /* const gifs = data.map(img => {
            return(
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            )
        }) */
    }
    getGif();
  return (
    <div className="GifGrid">
      <h2>{ category }</h2>
    
    </div>
  );
}

export default GifGrid;
