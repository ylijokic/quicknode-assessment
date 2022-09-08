import React from 'react'

export type ButtonColor = 'red' | 'blue' | 'green';

export interface ButtonProps {
    message: string;
    color: ButtonColor;
    opacity?: number;
    onClick?: () => void;
}

const Button = ({ message, color, opacity, onClick }: ButtonProps) => {
    return (
        <div className="flex flex-col justify-center items-center m-4">
            <button 
                onClick={onClick} 
                className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded-full opacity-${opacity}`}
            >
                {message}
            </button> 
        </div> 
    )
}

export default Button
