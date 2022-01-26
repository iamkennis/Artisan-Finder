import { useState } from 'react'

export default function SignUp() {
    const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [province,setProvince] = useState('')
	return (
		<div>
			<form className=''>
				<p>what are you looking for</p>
				<select>
					<option value='I need an Artisan'>I need an Artisan</option>
					<option value='I need an Artisan'>I need an Artisan</option>
				</select>
				<div>
					<h1>Create an account</h1>
					<p>Already have account? Signin</p>
				</div>
				<div>
					<label htmlFor='text'>Name</label>
					<br />
					<input
						className='p-3 w-64 appearance-none rounded font-normal outline-none pl-4 bg-gray-300 placeholder:text-black-700 text-sm'
						id='text'
						type='text'
						onChange={(event) => setName(event.target.value)}
						placeholder='Enter your name'
						value={name}
					/>
				</div>
				<div>
					<label htmlFor='text'>Last Name</label>
					<br />
					<input
						className='p-3 w-64 appearance-none rounded font-normal outline-none pl-4 bg-gray-300 placeholder:text-black-700 text-sm'
						id='text'
						type='text'
						onChange={(event) => setLastName(event.target.value)}
						placeholder='Enter your name'
						value={lastName}
					/>
				</div>
				<div>
					<label htmlFor='text'>Email</label>
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
				<div>
					<label htmlFor='text'>State/Province</label>
					<br />
					<input
						className='p-3 w-64 appearance-none rounded font-normal outline-none pl-4 bg-gray-300 placeholder:text-black-700 text-sm'
						id='text'
						type='text'
						onChange={(event) => setProvince(event.target.value)}
						placeholder='Enter your province'
						value={province}
					/>
				</div>
				<button className='md:h-10 w-34 pl-3 pr-3 bg-amber-400 hover:bg-yellow-600 rounded-lg font-bold text-black'>
					Create an account
				</button>
			</form>
		</div>
	);
}

