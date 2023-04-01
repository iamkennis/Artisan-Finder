import { useState,useReducer } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Link from 'next/link';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import { useToggle } from '../home/NavBar';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../pages/firebase';

export default function SignIn() {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isToggle, toggle]: any = useToggle();
	const [loading, setLoading] = useState(false);

	// function handleSignIn(e:any) {
	// 	setLoading(true)
    //     e.preventDefault(); 
	// 	signInWithEmailAndPassword(auth,email,password)
	// 	.then((userCredential) => {
    //         console.log(userCredential)
	// 		setLoading(false)
	// 	}).catch((error)=> {
	// 		console.log(error)
	// 		setLoading(false)
	// 	})
	// }

	return (
		<div className='flex flex-col items-center my-28'>
			<div className='text-center mb-5'>
				<h1 className='font-bold text-lg'>Sign In</h1>
				<p className='font-normal text-[14px]'>
					New User?{' '}
					<Link href='/signup'>
						<span className='text-yellow-400 font-bold text-[14px] cursor-pointer'>
							Create an account
						</span>
					</Link>
				</p>
			</div>
			<form className=''>
				<div>
					<Input
						label='Email Address'
						type='email'
						onChange={setEmail}
						placeholder='Enter your email'
						value={email}
					/>
				</div>
				<div className='my-2'>
				<Input
							label='Password'
							type={isToggle ? 'text' : 'password'}
							onChange={setPassword}
							placeholder='Enter your password'
							value={password}
							onClick={toggle}
							icons={isToggle ? <FaEyeSlash /> : <FaEye />}
						/>
				</div>
				<div className='mt-3'>
					<Button loading={loading}>Login</Button>
				</div>
			</form>
			{/* <div className='flex flex-col gap-4'>
				<span className='text-center'>Or</span>
				<button className='h-10 w-64 border-1 border-gray-200 text-white bg-red-500 font-bold rounded-[3px] text-black'>
					<span className='flex justify-center items-center gap-2'>
					<FaGoogle /> Contiune with google
					</span>
				</button>
				<button className='h-10 w-64 text-white bg-blue-600 rounded-[3px] font-bold text-black'>
					<span className='flex justify-center items-center gap-2'>
						<FaFacebook /> Contiune with facebook
					</span>
				</button>
			</div> */}
			<div className='text-center mt-4 px-18'>
				<p className='text-slate-700 text-sm leading-none my-1'>
					By clicking Create account,I agree that I have read and accepted the{' '}
					<span className='text-yellow-400'>Terms of Use</span> and{' '}
					<span className='text-yellow-400'>Privacy Policy</span>
				</p>
			</div>
		</div>
	);
}
