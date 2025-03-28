import { useSearchContext } from '../SearchProvider';

const NoResults = () => {
	const { query, setQuery } = useSearchContext();
	return (
		<div
			className="flex flex-col w-full h-full justify-center items-center py-4 text-muted-foreground"
			role="status"
			aria-live="polite"
		>
			<p className="mb-2">
				No results found for "<span aria-label="search query">{query}</span>".
				Try searching for:
			</p>

			<div className="flex">
				<button
					onClick={() => setQuery('vendor:')}
					className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded px-2"
				>
					Vendors
				</button>
				<span className="text-muted-foreground">or</span>
				<button
					onClick={() => setQuery('transaction:')}
					className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded px-2"
				>
					Transactions
				</button>
			</div>
		</div>
	);
};

export { NoResults };
