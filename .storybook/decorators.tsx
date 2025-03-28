import React from 'react';
import { SearchContext } from '../src/components/Search/SearchProvider';
import { SearchResult } from '../src/lib/types';

export const withSearchProvider = ({
	isOpen = false,
	isLoading = false,
	results = [],
}: {
	isOpen?: boolean;
	isLoading?: boolean;
	results?: SearchResult[];
} = {}) => {
	return (Story: React.ComponentType) => {
		return (
			<SearchContext.Provider
				value={{
					isOpen,
					openSearch: () => {},
					closeSearch: () => {},
					query: '',
					setQuery: () => {},
					isLoading,
					results,
				}}
			>
				<Story />
			</SearchContext.Provider>
		);
	};
};
