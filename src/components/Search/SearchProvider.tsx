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
	selectedIndex: number;
	setSelectedIndex: (index: number) => void;
	totalResultsCount: number;
};

export const SearchContext = createContext<SearchContextType | undefined>(
	undefined
);

export function SearchProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [results, setResults] = useState<SearchResult[]>([]);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [totalResultsCount, setTotalResultsCount] = useState(0);

	const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const openSearch = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeSearch = useCallback(() => {
		setIsOpen(false);
		setQuery('');
		setSelectedIndex(-1);
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
			setSelectedIndex(-1);
			setTotalResultsCount(0);
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

	useEffect(() => {
		if (!query.trim()) {
			setResults([]);
			setIsLoading(false);
			setSelectedIndex(-1);
			setTotalResultsCount(0);
			return;
		}

		// ... existing code ...
	}, [query]);

	// Calculate total results count when results change
	useEffect(() => {
		setTotalResultsCount(results.length);
		// Reset selection when results change
		setSelectedIndex(-1);
	}, [results]);

	// Add keyboard navigation handler
	useEffect(() => {
		if (!isOpen) return;

		const handleKeyNavigation = (e: KeyboardEvent) => {
			// Skip if search isn't open
			if (!isOpen) return;

			switch (e.key) {
				case 'ArrowDown':
					e.preventDefault();
					setSelectedIndex((prev) =>
						prev >= totalResultsCount - 1 ? -1 : prev + 1
					);
					break;
				case 'ArrowUp':
					e.preventDefault();
					setSelectedIndex((prev) =>
						prev <= -1 ? totalResultsCount - 1 : prev - 1
					);
					break;
				case 'Tab':
					// Allow Tab to navigate through results
					if (!e.shiftKey) {
						e.preventDefault();
						setSelectedIndex((prev) =>
							prev >= totalResultsCount - 1 ? -1 : prev + 1
						);
					} else {
						e.preventDefault();
						setSelectedIndex((prev) =>
							prev <= -1 ? totalResultsCount - 1 : prev - 1
						);
					}
					break;
				case 'Enter':
					// Handle Enter to select the current item
					if (selectedIndex >= 0 && selectedIndex < totalResultsCount) {
						e.preventDefault();
						// This will be implemented in the SearchResults component
					}
					break;
			}
		};

		window.addEventListener('keydown', handleKeyNavigation);
		return () => window.removeEventListener('keydown', handleKeyNavigation);
	}, [isOpen, totalResultsCount, selectedIndex]);

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
				selectedIndex,
				setSelectedIndex,
				totalResultsCount,
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
