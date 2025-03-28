import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import { useSearchContext } from './SearchProvider';

const SearchDialog = () => {
	const { isOpen, closeSearch } = useSearchContext();

	return (
		<Dialog open={isOpen} onOpenChange={closeSearch}>
			<DialogContent
				className="sm:max-w-md"
				aria-labelledby="search-dialog-title"
				aria-describedby="search-dialog-description"
			>
				<DialogHeader>
					<DialogTitle>Search</DialogTitle>
					<DialogDescription>Search through entities</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export { SearchDialog };
