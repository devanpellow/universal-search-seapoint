import React from 'react';
import { SearchContext } from '../src/components/Search/SearchProvider';
import { SearchResult } from '../src/lib/types';

export const withSearchProvider = ({
	isOpen = false,
	isLoading = false,
	results = [],
	query = '',
	width = 'w-full',
}: {
	isOpen?: boolean;
	isLoading?: boolean;
	results?: SearchResult[];
	query?: string;
	width?: string;
} = {}) => {
	return (Story: React.ComponentType) => {
		return (
			<SearchContext.Provider
				value={{
					isOpen,
					openSearch: () => {},
					closeSearch: () => {},
					query,
					setQuery: () => {},
					isLoading,
					results,
					selectedIndex: 0,
					setSelectedIndex: () => {},
					totalResultsCount: 0,
				}}
			>
				<div className={`${width}`}>
					<Story />
				</div>
			</SearchContext.Provider>
		);
	};
};
