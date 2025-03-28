import { useSearchContext } from '../SearchProvider';

const NoResults = () => {
	const { query } = useSearchContext();
	return (
		<div
			className="flex flex-col w-full h-full justify-center items-center py-4"
			role="status"
			aria-live="polite"
		>
			<p className="text-muted-foreground">
				No results found for "<span aria-label="search query">{query}</span>"
			</p>
		</div>
	);
};

export { NoResults };
