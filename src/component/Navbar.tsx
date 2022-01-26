
export default function NavBar(){
    return (
			<nav>
				<ul className='flex-row flex justify-end space-x-12 no-underline p-7'>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
						Home
					</li>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
						About
					</li>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
						Contact
					</li>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
						Sign In
					</li>
					<li className='text-sm font-medium cursor-pointer hover:text-yellow-400 text-white'>
						Sign Up
					</li>
				</ul>
			</nav>
		);
}

