import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useSearchContext } from './SearchProvider';

const SearchInput = () => {
	const { query, setQuery, selectedIndex } = useSearchContext();
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (selectedIndex === -1 && inputRef.current) {
			inputRef.current.focus();
		}
	}, [selectedIndex]);

	return (
		<div className="flex flex-col gap-4">
			<div className="relative">
				<Input
					ref={inputRef}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search..."
					className="pr-10"
					aria-label="Search"
					aria-controls="search-results"
				/>

				<Search className="absolute top-1/2 right-3 -translate-y-1/2 h-4 w-4 text-gray-400" />
			</div>
		</div>
	);
};

export { SearchInput };
