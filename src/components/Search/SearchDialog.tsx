import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import { useSearchContext } from './SearchProvider';
import { SearchInput } from './SearchInput';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const SearchDialog = () => {
	const { isOpen, closeSearch } = useSearchContext();

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
			</DialogContent>
		</Dialog>
	);
};

export { SearchDialog };
