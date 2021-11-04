import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');//undefined = useState()
    //actualiza la categoria
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    //al apretar enter
    const handleSubmit = (e) => {
        e.preventDefault();//refresca solo el elemento (no toda la pagina)
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}