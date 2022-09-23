import React,{useState} from 'react'
import Link from 'next/link'
import {FaHamburger, FaTimes} from 'react-icons/fa'
import { Router } from 'next/router';

export default function NavBar() {
const [click, setClick] = useState<boolean>(true);
	const handleClick = () => setClick(!click);
	
	// const handleRouter = () => {
	// 	router()
	// }

  return (
		<nav>
			<div
				onClick={handleClick}
				className='md:hidden lg:hidden  absolute top-0 z-50'>
				<div className='md:hidden lg:hidden text-white text-xl right-12 top-6 absolute z-50'>
					<FaTimes onClick={handleClick} />
				</div>
				{!click && (
					<div className='w-screen  bg-black p-8 rounded-lg relative z-40'>
						<ul className='flex flex-col items-center space-y-4 pt-12'>
							<li className='text-sm  cursor-pointer hover:text-yellow-400 text-white font-bold '>
								<Link href='/'>Find Artisan</Link>
							</li>
							<li className='text-sm  cursor-pointer hover:text-yellow-400 text-white font-bold'>
								<Link href='/about'>Find Work</Link>
							</li>
							<li className='text-sm  cursor-pointer hover:text-yellow-400 text-white font-bold'>
								<Link href='/contact'>About Us</Link>
							</li>
							<li className='text-sm  cursor-pointer hover:text-yellow-400 text-white font-bold'>
								<Link href='/signin'>Contact</Link>
							</li>
						</ul>
						<div className='flex flex-col my-4 space-y-4 items-center'>
							<button className='bg-yellow-500 hover:bg-yellow-600 p-2 h-12 w-24 rounded-lg font-bold'>
								Login
							</button>
							<button className='bg-white hover:bg-gray-600 p-3 px-5 h-12  rounded-full flex flex-row gap-3'>
								{/* <img src='/callicon.svg' alt='call' className='h-4 my-1 ' /> */}
								<span className='text-black font-bold text-sm'>
									800 456 889
								</span>
							</button>
						</div>
					</div>
				)}
			</div>
			<div className='flex flex-row items-center justify-between px-12'>
				<div className='py-5'>
					<img src='/superproxy.svg' className='h-6 lg:h-8' />
				</div>
				<div className='flex md:hidden lg:hidden relative'>
					<span className='text-black text-xl' onClick={handleClick}>
						<FaHamburger />
					</span>
				</div>
				<ul className='hidden lg:flex lg:flex-row md:hidden md:flex-row justify-center space-x-12 no-underline p-7'>
					<li className='text-sm  cursor-pointer hover:text-yellow-400 text-black font-bold '>
						<Link href='/'>Find Artisan</Link>
					</li>
					<li className='text-sm  cursor-pointer hover:text-yellow-400 text-black font-bold'>
						<Link href='/about'>Find Work</Link>
					</li>
					<li className='text-sm  cursor-pointer hover:text-yellow-400 text-black font-bold'>
						<Link href='/contact'>About Us</Link>
					</li>
					<li className='text-sm  cursor-pointer hover:text-yellow-400 text-black font-bold'>
						<Link href='/signin'>Contact</Link>
					</li>
				</ul>
				<div className='hidden md:flex lg:flex lg:flex-row h-full gap-4 my-4 items-center'>
					<button className='bg-yellow-500 hover:bg-yellow-600 p-2 h-12 w-24 rounded-lg font-bold'>
						Login
					</button>
					<button className='bg-black hover:bg-gray-600 p-3 px-5 h-12  rounded-full flex flex-row gap-3'>
						<img src='/callicon.svg' alt='call' className='h-4 my-1' />
						<span className='text-white font-bold text-sm'>800 456 889</span>
					</button>
				</div>
			</div>
		</nav>
	);
}
