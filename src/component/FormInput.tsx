// import { Form } from 'formik'
import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
// import Input from './input'


function FormInput() {
const [name, setName] = useState('')
const [location, setLocation] = useState('')


	function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setName('')
		setLocation('')
	}	
		
    return (
			<form onSubmit={handleSubmit} className='text-center'>
				<input
					className='p-3 w-64 appearance-none rounded font-normal outline-none pl-4 bg-gray-100 placeholder:text-black-700 text-sm'
					id='text'
					type='search'
					onChange={(event) => setName(event.target.value)}
					placeholder='What service are you looking for ?'
					value={name}
				/>
				<div className='pt-4 flex flex-row justify-center space-x-3 content-center'>
					<input
						className='p-3 w-40 appearance-none rounded font-normal outline-none pl-4 bg-gray-100 placeholder:text-black-700 text-sm'
						id='text'
						onChange={(event) => setLocation(event.target.value)}
						placeholder='Enter your location'
						value={location}
					/>
					<span>
						<FaMapMarkerAlt className='bg-white' />
					</span>
					<button className='md:h-10 w-20 bg-amber-400 hover:bg-yellow-600 rounded font-bold text-black'>
						Search
					</button>
				</div>
				<p className='pt-3 text-white font-bold'>or</p>
				<div className='pt-3'>
					<button className='md:h-10 w-64 bg-amber-400 hover:bg-yellow-600 rounded font-bold text-black'>
						Post a job
					</button>
				</div>
			</form>
		);
}


   


export default FormInput