import React, { useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({setcategories}) => {

   const [inputValue, setInputValue] = useState("");
   const handleInputChange = (e) => {
       setInputValue(e.target.value);
   }

   const hanslesSubmit = (e) => {
   e.preventDefault();
 
    if (inputValue.trim().length > 2) {
       setcategories(cats => [inputValue.replace(/\b\w/g, l => l.toUpperCase()),...cats]);
       setInputValue(''); 
    }


   }
   return (
        <form onSubmit={hanslesSubmit}>
         <input
         type="text" 
         className="buscar" 
         value={ inputValue }
         onChange={ handleInputChange }
         />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

export default AddCategory
