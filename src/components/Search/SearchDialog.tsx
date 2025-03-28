import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import { useSearchContext } from './SearchProvider';
import { SearchTriggerButton } from './SearchTriggerButton';

const SearchDialog = () => {
	const { isOpen, closeSearch } = useSearchContext();

	return (
		<Dialog open={isOpen} onOpenChange={closeSearch}>
			<SearchTriggerButton />
			<DialogContent
				className="sm:max-w-md"
				aria-labelledby="search-dialog-title"
				aria-describedby="search-dialog-description"
			>
				<DialogHeader>
					<DialogTitle id="search-dialog-title">Search</DialogTitle>
					<DialogDescription id="search-dialog-description">
						Search through entities
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export { SearchDialog };
