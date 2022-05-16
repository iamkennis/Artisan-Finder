import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    	<nav>
				<ul className='flex-row flex justify-end space-x-12 no-underline p-7'>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
					<Link href='/'>Home</Link>
					</li>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
						<Link href='/about'>About</Link>
					</li>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
						<Link href='/contact'>Contact</Link>
					</li>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
						<Link href='/signin'>LogIn</Link>
					</li>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
						<Link href='/'>SignUp</Link>
					</li>
				</ul>
			</nav>
  )
}
