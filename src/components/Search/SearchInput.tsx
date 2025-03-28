import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

import { useSearchContext } from './SearchProvider';
const SearchInput = () => {
	const { query, setQuery } = useSearchContext();
	return (
		<div className="flex flex-col gap-4">
			<div className="relative">
				<Input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Enter text"
					className="pr-10"
				/>

				<Search className="absolute top-1/2 right-3 -translate-y-1/2 h-4 w-4 text-gray-400" />
			</div>
		</div>
	);
};

export { SearchInput };
