import './App.css';
import { SearchDialog } from './components/Search/SearchDialog';
import { SearchProvider } from './components/Search/SearchProvider';
import { NavBar } from './components/NavBar';
import { SelectedEntity } from './components/SelectedEntity';
function App() {
	return (
		<div className="min-h-screen w-full bg-[url('/splash.svg')] bg-cover bg-center bg-no-repeat">
			<SearchProvider>
				<NavBar />
				<SearchDialog />
				<SelectedEntity />
			</SearchProvider>
		</div>
	);
}

export default App;
