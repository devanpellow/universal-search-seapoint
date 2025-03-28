import { SearchResultGroup } from './SearchResultGroup';
import { useSearchContext } from './SearchProvider';
import { groupSearchResults } from '@/lib/utils';

const SearchResults = () => {
	const { results } = useSearchContext();
	const groups = groupSearchResults(results);

	// Calculate start index for each group
	let currentStartIndex = 0;

	return (
		<div
			className="flex flex-col gap-4"
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
