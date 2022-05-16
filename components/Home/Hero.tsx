import React from 'react'
import Form from './Form';

export default function Hero() {
    return (
        <header className='text-center m-5 p-4'>
           
            <h1 className='text-white lg:text-lg text-3xl md:font-bold'>
                Find an Artisan
            </h1>
            <p className='text-white text-center p-3'>
                Get artisan for the work close to you
            </p>
             <Form/>
        </header>
    );
}
