import React from "react";

const Button = ({color, bgColor, text, size}) => {
    return (
        <button
        type='button'
        style={{ backgroundColor: bgColor, color}}
        className={`text-${size} text-${color} rounded-md p-3 hover:drop-shadow-xl`}>
            {text}
        </button>
    )
}

export default Button;