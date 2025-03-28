import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import { SearchInput } from './SearchInput';
import { Skeleton } from '@/components/ui/skeleton';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Boxes, Filter } from 'lucide-react';
import { SearchResults } from './SearchResults';
import { NoResults } from './ResultItems/NoResults';
import { ErrorState } from './ResultItems/ErrorState';
import { useSearchDialogState } from './hooks/useSearchDialogState';

const SearchDialog = () => {
	const {
		isOpen,
		closeSearch,
		showResults,
		showLoading,
		showNoResults,
		showHint,
		hasError,
	} = useSearchDialogState();

	return (
		<Dialog open={isOpen} onOpenChange={closeSearch}>
			<DialogContent
				className="sm:max-w-md [&>button]:hidden p-1"
				aria-labelledby="search-dialog-title"
				aria-describedby="search-dialog-description"
			>
				<VisuallyHidden>
					<DialogHeader>
						<DialogTitle>Search</DialogTitle>
						<DialogDescription>Search through entities</DialogDescription>
					</DialogHeader>
				</VisuallyHidden>
				<SearchInput />
				{showResults && <SearchResults />}
				{showLoading && <Loading />}
				{showNoResults && <NoResults />}
				{showHint && <Hint />}
				{hasError && <ErrorState />}
			</DialogContent>
		</Dialog>
	);
};

export { SearchDialog };

const Hint = () => {
	return (
		<div className="space-y-4 p-1">
			<div>
				<h3 className="mb-2 text-sm font-medium">Hint</h3>
				<div className="space-y-2">
					<div className="flex items-center gap-2 p-2 rounded-md">
						<Filter className="h-4 w-4 text-muted-foreground" />
						<span>
							Prefix search with <code className="text-blue-400">vendor:</code>{' '}
							or <code className="text-blue-400">transaction:</code>
						</span>
					</div>
					<div className="flex items-center gap-2 p-2 rounded-md">
						<Boxes className="h-5 w-5 text-muted-foreground" />
						<span>
							Filter by properties <code className="text-blue-400">name:</code>
							{' or '}
							<code className="text-blue-400">email:</code>
							{' or '}
							<code className="text-blue-400">description:</code>
							{' or '}
							<code className="text-blue-400">amount:</code>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const Loading = () => {
	return (
		<div className="flex flex-col gap-2 m-4">
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-full" />
			<Skeleton className="h-4 w-full" />
		</div>
	);
};
