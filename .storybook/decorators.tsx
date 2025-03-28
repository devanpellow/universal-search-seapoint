import React from 'react';
import { SearchContext } from '../src/components/Search/SearchProvider';
import { SearchResult } from '../src/lib/types';

export const withSearchProvider = ({
	isOpen = false,
	isLoading = false,
	results = [],
	query = '',
}: {
	isOpen?: boolean;
	isLoading?: boolean;
	results?: SearchResult[];
	query?: string;
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
				<div className="w-md h-full">
					<Story />
				</div>
			</SearchContext.Provider>
		);
	};
};
