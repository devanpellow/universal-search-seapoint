import { SearchTriggerButton } from './Search/SearchTriggerButton';
import logo from '../assets/logo.svg';

export function NavBar() {
	return (
		<nav className="flex items-center justify-between p-4 bg-black/10 backdrop-blur-sm">
			<div className="flex items-center">
				<img
					src={logo}
					alt="Seapoint"
					className="w-56"
					aria-label="Seapoint logo"
				/>
			</div>
			<div className="flex items-center">
				<SearchTriggerButton />
			</div>
		</nav>
	);
}
