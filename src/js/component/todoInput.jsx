import React, { useState } from "react";

function TodoInput(props){
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            console.log('se opresiono');
            props.onAdd(inputValue);
            setInputValue('');
        }
    }

    return(
       <input type="text" onChange={event => setInputValue(event.target.value)} value={inputValue} onKeyDown={handleKeyDown} />
    )
}

export default TodoInput