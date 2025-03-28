import { useSearchContext } from '../SearchProvider';

export function useSearchDialogState() {
	const { isOpen, closeSearch, query, isLoading, results, hasError } =
		useSearchContext();

	return {
		isOpen,
		closeSearch,
		query,
		hasError,
		showResults: results.length > 0,
		showHint: query.length === 0 && !hasError && results.length === 0,
		showNoResults: !isLoading && query.length > 0 && results.length === 0,
		showLoading: isLoading && query.length > 0 && results.length === 0,
		results,
	};
}
