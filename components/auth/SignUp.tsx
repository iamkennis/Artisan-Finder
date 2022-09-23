import { useState } from 'react'
import Button from '../ui/Button'
import Input from '../ui/Input'

export default function SignUp() {
    const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [province,setProvince] = useState('')
	return (
		<div className='flex flex-col items-center my-20'>
			<form>
				<p className='text-lg text-center font-bold'>
					what are you looking for
				</p>
				<select className='text-sm mx-8 px-4 py-2 bg-transparent border-2 rounded-lg outline-none border-yellow-400 font-bold'>
					<option value='I need an Artisan'>I need an Artisan</option>
					<option value='I need an Artisan'>I need an Artisan</option>
				</select>
				<div className='text-lg text-center font-bold mb-5'>
					<h1>Create an account</h1>
					<p>Already have account? Signin</p>
				</div>
				<div className='my-4'>
					<Input
						label='Name'
						type='name'
						onChange={setName}
						placeholder='Enter your name'
						value={name}
					/>
				</div>
				<div className='my-4'>
					<Input
						label='Last Name'
						type='name'
						onChange={setLastName}
						placeholder='Enter your last name'
						value={lastName}
					/>
				</div>
				<div className='my-4'>
					<Input
						label='Email'
						type='email'
						onChange={setEmail}
						placeholder='Enter your email'
						value={email}
					/>
				</div>
				<div className='my-4'>
					<Input
						label='Password'
						type='password'
						onChange={setPassword}
						placeholder='Enter your password'
						value={password}
					/>
				</div>
				<div className='my-4'>
					<Input
						label='State/Province'
						type='city'
						onChange={setProvince}
						placeholder='Enter your province'
						value={province}
					/>
				</div>
				<div className='my-4'>
					<Button>Create an account</Button>
				</div>
			</form>
			<p className='text-slate-700 text-sm leading-none my-1'>
				By clicking Create account,I agree that <br />I have read and accepted
				the
				<br />
				<span className='text-yellow-400'>Terms of Use</span> and{' '}
				<span className='text-yellow-400'>Privacy Policy</span>
			</p>
		</div>
	);
}

