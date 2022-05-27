import React, { useState } from "react";
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length != 0){
            setCategories(cats => [inputValue, ...cats,]);
            setInputValue('');
        }
    }
  return (
    <div className="App">
      <h2>Category Add</h2>
      <form onSubmit={ handleSubmit }>
          <input type="text" value={ inputValue } onChange={ handleInputChange } />
      </form>
    </div>
  )
}
CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
}