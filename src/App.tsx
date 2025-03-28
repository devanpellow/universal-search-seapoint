import './App.css';
import { SearchDialog } from './components/Search/SearchDialog';
import { SearchProvider } from './components/Search/SearchProvider';
import { SearchTriggerButton } from './components/Search/SearchTriggerButton';
function App() {
	return (
		<div className="flex flex-col items-center justify-center min-h-svh">
			<SearchProvider>
				<SearchTriggerButton />
				<SearchDialog />
			</SearchProvider>
		</div>
	);
}

export default App;
