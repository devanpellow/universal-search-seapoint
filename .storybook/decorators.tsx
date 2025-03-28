import React from 'react';
import { SearchContext } from '../src/components/Search/SearchProvider';

export const withSearchProvider = ({
	isOpen = false,
	isLoading = false,
}: {
	isOpen?: boolean;
	isLoading?: boolean;
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
				}}
			>
				<Story />
			</SearchContext.Provider>
		);
	};
};
