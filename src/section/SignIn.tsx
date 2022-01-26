import { useState } from "react";

export default function SignIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')




	return (
		<div>
			<div>
				<h1>Sign In</h1>
				<p>New User? Create an account</p>
			</div>
			<form className=''>
				<div>
					<label htmlFor='text'>Email Address</label>
					<br />
					<input
						className='p-3 w-64 appearance-none rounded font-normal outline-none pl-4 bg-gray-300 placeholder:text-black-700 text-sm'
						id='email'
						type='email'
						onChange={(event) => setEmail(event.target.value)}
						placeholder='Enter your email'
						value={email}
					/>
				</div>
				<div>
					<label htmlFor='text'>Password</label>
					<br />
					<input
						className='p-3 w-64 appearance-none rounded font-normal outline-none pl-4 bg-gray-300 placeholder:text-black-700 text-sm'
						id='text'
						type='text'
						onChange={(event) => setPassword(event.target.value)}
						placeholder='Enter your password'
						value={password}
					/>
				</div>
				<button className='md:h-10 w-24 bg-amber-400 hover:bg-yellow-600 rounded-lg font-bold text-black'>
					Contiune
				</button>
				<p>Or</p>
				<button className='sm:h-10 w-64 bg-transparent border-2 border-gray-200 border-solid hover:text-white hover:bg-red-500 rounded-xl font-bold text-black'>
					Contiune with Google
				</button>
				<button className='md:h-10 w-64 bg-transparent border-2 hover:text-white hover:bg-blue-600 rounded-lg font-bold text-black'>
					Contiune with facebook
				</button>
			</form>
		</div>
	);
}
