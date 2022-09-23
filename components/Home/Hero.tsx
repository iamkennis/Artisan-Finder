import React from 'react'
import Form from '../ui/Form';

export default function Hero() {
    return (
			<header>
				<div className='relative z-10'>
					<img
						src='/sp.png'
						className='h-screen  w-full object-cover md:h-3/7 lg:h-3/6'
					/>
					<div className='container absolute left-0 top-0 mt-4 bottom-0'>
						<div className='flex flex-col items-center md:flex-row  lg:flex-row lg:justify-between  xl:justify-between'>
							<div className='px-4 py-4'>
								<p className='text-white mt-8 text-xl font-bold lg:text-md'>
									Get a trusted Artisan right away!
								</p>
								<h2 className='text-white hidden lg:block md:block font-bold text-md md:text-4xl lg:text-4xl xl:text-6xl lg:text-left'>
									Connect to over 200k plus <br /> Artisans & Businesses
									<br /> across the Philipines
								</h2>
							</div>
							<div className='flex flex-col lg:flex-col md:pt-10 lg:py-24'>
								<div className='max-w-md mx-4 overflow-hidden md:w-80 lg:w-96  bg-yellow-500 p-4 rounded-lg'>
									<h2 className=' text-lg lg:text-4xl font-bold'>
										Find Artisan
									</h2>
									<p className='py-4'>
										We make your job easier – that means finding you the best
										Artisan within reach.
									</p>
									<button className='bg-white hover:bg-gray-600 h-10 w-24 rounded-lg font-bold'>
										Hire now
									</button>
								</div>
								<div className='max-w-md mx-4 bg-white overflow-hidden md:w-80 p-4 lg:w-96 mt-2 lg:mt-0 rounded-lg relative lg:right-14'>
									<h2 className=' text-lg lg:text-4xl font-bold'>Find Work</h2>
									<p className='py-4'>
										We make your job easier – that means finding you the best
										Artisan within reach.
									</p>
									<button className='bg-yellow-500 hover:bg-yellow-600 h-10 w-24 rounded-lg font-bold'>
										Find work
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
}
