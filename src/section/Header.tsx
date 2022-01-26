import FormInput from "../component/FormInput";
import Hero from "../component/Hero";
import NavBar from "../component/Navbar";


export default function Header() {
	return (
		<div className='bg-black h-screen p-5'>
			<NavBar />
			<Hero />
			<FormInput />
		</div>
	);
}
