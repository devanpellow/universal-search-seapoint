import { useSearchContext } from "../SearchProvider";

const NoResults = () => {
	const { query } = useSearchContext();
	return (
		<div className="flex flex-col w-full h-full justify-center items-center py-4">
			<p className="text-muted-foreground">No results found for "{query}"</p>
		</div>
	);
};

export { NoResults };
