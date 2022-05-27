import React, { useState } from "react";
import CategoryAdd from './components/CategoryAdd';
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    //const categories = ['The powerpuff girls','Game of thrones','One piece','Los simuladores','Ten percent']
    const [categories, setCategories] = useState(['The powerpuff girls']);
    /* const handleApp = () => {
        setCategories((cats) => [ ...cats, 'Fantastic animals' ]);
    } */
    return (
      <div className="GifExpertApp">
        <h2>GifExpertApp</h2>
        {/* <button onClick={ handleApp }>+</button> */}
        <CategoryAdd setCategories={ setCategories } />
        <ol>
            {categories.map((category) => {
              <GifGrid key={ category } category={ category } />
                //return (<li key={ category }>{ category }</li>)
            })
            }
        </ol>
      </div>
    );
  }
  
  export default GifExpertApp;
  