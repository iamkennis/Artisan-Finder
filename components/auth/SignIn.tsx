import { useState } from "react";
import Button from "../ui/Button";
import Input from '../ui/Input'

export default function SignIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className='flex flex-col items-center my-28'>
			<div className='text-lg text-center font-bold mb-5'>
				<h1>Sign In</h1>
				<p>New User? Create an account</p>
			</div>
			<form className=''>
				<div>
					<label htmlFor='text'>Email Address</label>
					<br />
					<Input
						type='email'
						onChange={setEmail}
						placeholder='Enter your email'
						value={email}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<br />
					<Input
						type='password'
						onChange={setPassword}
						placeholder='Enter your password'
						value={password}
					/>
				</div>
				<div className='mt-3'>
					<Button>Login</Button>
				</div>
			</form>
			<div className='flex flex-col gap-4'>
				<span className='text-center'>Or</span>
				<button className='h-10 w-64 bg-transparent border-2 border-gray-200  hover:text-white hover:bg-red-500 font-bold rounded-lg text-black'>
					Contiune with Google
				</button>
				<button className='h-10 w-64 bg-transparent border-2 hover:text-white hover:bg-blue-600 rounded-lg font-bold text-black'>
					Contiune with Facebook
				</button>
			</div>
			<div className='my-4'>
				<p className='text-slate-700 text-sm leading-none'>
					By clicking Create account,I agree that <br />I have read and accepted
					the
					<br />
					<span className='text-yellow-400'>Terms of Use</span> and{' '}
					<span className='text-yellow-400'>Privacy Policy</span>
				</p>
			</div>
		</div>
	);
}
