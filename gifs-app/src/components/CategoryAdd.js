import { useState } from "react";
import PropTypes from 'prop-types';

const CategoryAdd = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(cats => [...cats, inputValue]);
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
export default CategoryAdd;
CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired
}