import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: any;
    onChange?: (...args: any[]) => any;
    label?: any
}

const Input: React.FC<InputProps> = (props) => {
	const { className,label, onChange, ...rest } = props;

	const handleChange = (e: any) => {
		if (onChange) {
			onChange(e.target.value);
		}
		return null;
	};

	return (
		<div>
			<label htmlFor='text'>{label}</label>
			<br />
			<input
				className='p-3 w-64 appearance-none rounded font-normal outline-none pl-4 bg-gray-300 placeholder:text-black-700 text-sm'
				onChange={handleChange}
				autoComplete='off'
				autoCorrect='off'
				autoCapitalize='off'
				spellCheck='false'
				{...rest}
			/>
		</div>
	);
};

export default Input