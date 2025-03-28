import React from 'react';
import { SearchContext } from '../src/components/Search/SearchProvider';

export const withSearchProvider = ({
	isOpen = false,
}: {
	isOpen?: boolean;
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
				}}
			>
				<Story />
			</SearchContext.Provider>
		);
	};
};
