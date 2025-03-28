import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	useCallback,
} from 'react';

type SearchContextType = {
	isOpen: boolean;
	openSearch: () => void;
	closeSearch: () => void;
	query: string;
	setQuery: (query: string) => void;
	isLoading: boolean;
};

export const SearchContext = createContext<SearchContextType | undefined>(
	undefined
);

export function SearchProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const openSearch = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeSearch = useCallback(() => {
		setIsOpen(false);
		setQuery('');
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k' && !isOpen) {
				e.preventDefault();
				openSearch();
			}

			if (
				e.key === '/' &&
				!isOpen &&
				!['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')
			) {
				e.preventDefault();
				openSearch();
			}

			if (e.key === 'Escape' && isOpen) {
				e.preventDefault();
				closeSearch();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, openSearch, closeSearch]);

	return (
		<SearchContext.Provider
			value={{
				isOpen,
				openSearch,
				closeSearch,
				query,
				setQuery,
				isLoading,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
}

export function useSearchContext() {
	const context = useContext(SearchContext);
	if (context === undefined) {
		throw new Error('useSearchContext must be used within a SearchProvider');
	}
	return context;
}
