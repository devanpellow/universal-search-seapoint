import { searchEntities } from '@/lib/search-entities';
import { SearchResult } from '@/lib/types';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useSearchNavigation, useSearchToggle } from './helpers';
import { useDebounce } from 'use-debounce';

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
	selectedEntity: SearchResult | null;
	setSelectedEntity: (entity: SearchResult | null) => void;
	hasError: boolean;
};

const SEARCH_DEBOUNCE_MS = 300;

export const SearchContext = createContext<SearchContextType | undefined>(
	undefined
);

function useSearchState() {
	const [query, setQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [results, setResults] = useState<SearchResult[]>([]);
	const [totalResultsCount, setTotalResultsCount] = useState(0);
	const [hasError, setHasError] = useState(false);
	const [debouncedQuery] = useDebounce(query.trim(), SEARCH_DEBOUNCE_MS);

	useEffect(() => {
		if (query.trim() && query.trim() !== debouncedQuery) {
			setIsLoading(true);
		}
	}, [query, debouncedQuery]);

	useEffect(() => {
		if (!debouncedQuery) {
			setResults([]);
			setIsLoading(false);
			setTotalResultsCount(0);
			return;
		}

		const fetchResults = async () => {
			try {
				const searchResults = await searchEntities(debouncedQuery);
				setResults(searchResults);
				setTotalResultsCount(searchResults.length);
			} catch (error) {
				console.error('Search failed:', error);
				setResults([]);
				setTotalResultsCount(0);
				setHasError(true);
			} finally {
				setIsLoading(false);
			}
		};

		fetchResults();
	}, [debouncedQuery]);

	return {
		query,
		setQuery,
		isLoading,
		results,
		totalResultsCount,
		hasError,
	};
}

export function SearchProvider({ children }: { children: React.ReactNode }) {
	const [selectedEntity, setSelectedEntity] = useState<SearchResult | null>(
		null
	);
	const { isOpen, openSearch, closeSearch } = useSearchToggle();
	const { query, setQuery, isLoading, results, totalResultsCount, hasError } =
		useSearchState();
	const { selectedIndex, setSelectedIndex } = useSearchNavigation(
		isOpen,
		totalResultsCount
	);

	useEffect(() => {
		if (!isOpen) {
			setQuery('');
			setSelectedIndex(-1);
		}
	}, [isOpen, setQuery, setSelectedIndex]);

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
				selectedEntity,
				setSelectedEntity,
				hasError,
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
