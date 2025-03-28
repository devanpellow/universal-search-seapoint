import React from 'react';
import { SearchContext } from '../src/components/Search/SearchProvider';
import { SearchResult } from '../src/lib/types';

export const withSearchProvider = ({
	isOpen = false,
	isLoading = false,
	results = [],
	query = '',
	width = 'w-full',
	hasError = false,
}: {
	isOpen?: boolean;
	isLoading?: boolean;
	results?: SearchResult[];
	query?: string;
	width?: string;
	hasError?: boolean;
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
					hasError,
					selectedEntity: null,
					setSelectedEntity: () => {},
				}}
			>
				<div className={`${width}`}>
					<Story />
				</div>
			</SearchContext.Provider>
		);
	};
};
