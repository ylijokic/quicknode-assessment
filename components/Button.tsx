import React from 'react'

export type ButtonColor = 'primary' | 'cancel';

export interface ButtonProps {
    message: string;
    type: ButtonColor;
    onClick?: () => void;
}

const Button = ({ message, type, onClick }: ButtonProps) => {
    return (
        <div className="flex flex-col justify-center items-center m-4">
        {type === 'primary' 
        ? 
            <button 
                onClick={onClick} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
                {message}
            </button> 
        : 
            <button 
                onClick={onClick} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
                {message}
            </button>
        } 
        </div> 
    )
}

export default Button
