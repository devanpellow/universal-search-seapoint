import { SearchResultGroup } from './SearchResultGroup';
import { useSearchContext } from './SearchProvider';
import { groupSearchResults } from '@/lib/utils';

const SearchResults = () => {
	const { results } = useSearchContext();
	const groups = groupSearchResults(results);

	return (
		<div className="flex flex-col gap-4">
			{groups.map((group) => (
				<SearchResultGroup key={group.id} group={group} />
			))}
		</div>
	);
};

export { SearchResults };
