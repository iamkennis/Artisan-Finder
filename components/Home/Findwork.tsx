import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
// import Form from '../ui/Form';

export default function FindWork() {
  return (
		<section className='bg-black w-full h-full py-24 md:py-24 lg:py-24'>
			<div className='flex flex-col items-center md:pt-4 md:items-center md:flex-col  lg:grid lg:grid-cols-2 lg:mx-24  lg:pt-18'>
				<div className='md:my-8'>
					<h1 className='text-white text-3xl lg:text-5xl font-bold'>
						Find Work
					</h1>
					<hr className='w-16 border-yellow-500' />
				</div>
				<div className='max-w-xs lg:block lg:max-w-2xl px-4 py-4'>
					<h2 className='text-white text-3xl lg:text-4xl font-bold'>
						Over <strong className='text-yellow-500'>2000</strong> Jobs <br />{' '}
						Posted daily
					</h2>
					<p className=' lg:block text-white text-md py-4'>
						We make it easy for you to hire the most proficient Artisan with
						years of experience, and the exact skills you’re looking for.
					</p>
				</div>
				<div>
					<form className='h-12 bg-white w-72 rounded-lg font-bold flex flex-1'>
						<input
							className='h-12 bg-white  px-4 rounded-l-lg outline-none border-none'
							placeholder='Search'
						/>
						<button className='bg-yellow-500 hover:bg-yellow-600 h-12 w-28 rounded-lg font-bold'>
							Search
						</button>
					</form>
				</div>
				<div className='mt-4 ml-4'>
					<form className='flex flex-col lg:flex-row lg:gap-8 lg:items-center'>
						<small className='h-12 bg-white w-72 lg:w-40 rounded-lg font-bold flex flex-0'>
							<FaMapMarkerAlt className='text-black-400 lg:absolute text-base m-4' />
							<input
								className='h-12 bg-white lg:w-40 pl-10 rounded-lg outline-none border-none'
								placeholder='Enter your location'
							/>
						</small>
						<select className='h-12 bg-white w-72 lg:w-40 rounded-lg font-sm my-4 outline-none px-4'>
							<option>All categories</option>
							<option>SW</option>
							<option>AS</option>
						</select>
						<select className='h-12 bg-white w-72 lg:w-40 rounded-lg font-sm outline-none px-4'>
							<option>All types</option>
							<option>ER</option>
							<option>EF</option>
						</select>
					</form>
				</div>
			</div>
		</section>
	);
}
