import React from 'react'

interface ButtonProps{
    children: any;
}

const Button: React.FC<ButtonProps> = ({children}) => {
    return (
        <button className='p-3 w-64 bg-amber-400 hover:bg-yellow-600 rounded-lg font-bold text-black'>
            {children}
            </button>
		);
};


export default Button