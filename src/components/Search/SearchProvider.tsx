import { searchEntities } from '@/lib/search-entities';
import { SearchResult } from '@/lib/types';
import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	useCallback,
	useRef,
} from 'react';

type SearchContextType = {
	isOpen: boolean;
	openSearch: () => void;
	closeSearch: () => void;
	query: string;
	setQuery: (query: string) => void;
	isLoading: boolean;
	results: SearchResult[];
};

export const SearchContext = createContext<SearchContextType | undefined>(
	undefined
);

export function SearchProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [results, setResults] = useState<SearchResult[]>([]);

	const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

	useEffect(() => {
		if (!query.trim()) {
			setResults([]);
			setIsLoading(false);
			return;
		}

		setIsLoading(true);

		// Debounce search requests
		if (searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
		}

		searchTimeoutRef.current = setTimeout(async () => {
			try {
				const searchResults = await searchEntities(query);
				setResults(searchResults);
			} catch (error) {
				console.error('Search failed:', error);
				setResults([]);
			} finally {
				setIsLoading(false);
			}
		}, 300);

		return () => {
			if (searchTimeoutRef.current) {
				clearTimeout(searchTimeoutRef.current);
			}
		};
	}, [query]);

	return (
		<SearchContext.Provider
			value={{
				isOpen,
				openSearch,
				closeSearch,
				query,
				setQuery,
				isLoading,
				results,
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
