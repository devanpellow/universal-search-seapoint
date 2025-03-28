import { SearchResultGroup } from './SearchResultGroup';
import { useSearchContext } from './SearchProvider';
import { groupSearchResults } from '@/lib/utils';

const SearchResults = () => {
	const { results } = useSearchContext();
	const groups = groupSearchResults(results);

	let currentStartIndex = 0;

	return (
		<div
			className="flex flex-col"
			id="search-results"
			role="listbox"
			aria-label="Search results"
		>
			{groups.map((group) => {
				const startIndex = currentStartIndex;
				currentStartIndex += group.items.length;

				return (
					<SearchResultGroup
						key={group.id}
						group={group}
						startIndex={startIndex}
					/>
				);
			})}
		</div>
	);
};

export { SearchResults };
