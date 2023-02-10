import Head from 'next/head';
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
// import Form from '../ui/Form';

export default function FindWork() {
  return (
		<>
			<Head>
				<title>Find Work</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className='bg-black w-full h-full'>
				<div className='grid grid-flow-row px-8 md:px-24 lg:items-center gap-4 lg:px-10 lg:grid-cols-12 py-32'>
					<div className='col-span-5'>
						<div>
							<div className='mb-8 lg:mb-28'>
								<h1 className='text-white text-3xl lg:text-5xl font-bold'>
									Find Work
								</h1>
								<hr className='w-16 border-yellow-500' />
							</div>

							<div>
								<form className='h-12 bg-white w-full  lg:max-w-sm rounded-md font-bold flex flex-row justify-between'>
									<input
										className='h-12 bg-white w-full px-4 lg:pl-8 lg:max-w-sm rounded-md outline-none border-none'
										placeholder='Search'
									/>
									<button className='bg-yellow-500 hover:bg-yellow-600 h-12 text-white px-4 max-w-xl rounded-r-md font-bold'>
										Search
									</button>
								</form>
							</div>
						</div>
					</div>
					<div className='col-span-7'>
						<div className='max-w-md lg:block lg:max-w-xl'>
							<h2 className='text-white text-3xl lg:text-4xl font-bold'>
								Over <strong className='text-yellow-500'>2000</strong> Jobs{' '}
								<br /> Posted daily
							</h2>
							<p className=' lg:block text-white text-md py-4'>
								We make it easy for you to hire the most proficient Artisan with
								years of experience, and the exact skills you’re looking for.
							</p>
						</div>
						<div className='grid lg:grid-flow-col lg:items-center lg:gap-4'>
							<form className='h-12 bg-white w-full lg:max-w-sm rounded-md flex flex-row'>
								<FaMapMarkerAlt className='text-black-400 lg:absolute text-base m-4' />
								<input
									className='h-12 max-w-md  bg-white lg:px-10  lg:placeholder:text-sm rounded-md outline-none border-none'
									placeholder='Enter your location'
								/>
							</form>
							<select className='h-12 bg-white w-full rounded-md lg:max-w-sm font-sm my-4 outline-none px-4'>
								<option>All categories</option>
								<option>SW</option>
								<option>AS</option>
							</select>
							<select className='h-12 bg-white w-full rounded-md lg:max-w-sm font-sm outline-none px-4'>
								<option>All types</option>
								<option>ER</option>
								<option>EF</option>
							</select>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
