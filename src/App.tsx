import './App.css';
import { SearchDialog } from './components/Search/SearchDialog';
import { SearchProvider } from './components/Search/SearchProvider';

function App() {
	return (
		<div className="flex flex-col items-center justify-center min-h-svh">
			<SearchProvider>
				<SearchDialog />
			</SearchProvider>
		</div>
	);
}

export default App;
