import { useEffect, useRef } from 'react';
import { useSearchContext } from './SearchProvider';
import { VendorItem } from './ResultItems/VendorItem';
import { TransactionItem } from './ResultItems/TransactionItem';
import { ResultGroup, SearchResult, Transaction, Vendor } from '@/lib/types';

interface SearchResultGroupProps {
	group: ResultGroup;
	startIndex: number;
}

const focusedStyles =
	'outline-none rounded-md focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:bg-muted';

function SearchResultGroup({ group, startIndex }: SearchResultGroupProps) {
	const { items, label } = group;
	const { selectedIndex, setSelectedEntity, closeSearch } = useSearchContext();
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

	const handleSelectEntity = (item: SearchResult) => {
		setSelectedEntity(item);
		closeSearch();
	};

	useEffect(() => {
		const localIndex = selectedIndex - startIndex;
		if (
			localIndex >= 0 &&
			localIndex < items.length &&
			itemRefs.current[localIndex]
		) {
			itemRefs.current[localIndex]?.focus();
		}
	}, [selectedIndex, startIndex, items.length]);

	const renderItem = (item: SearchResult, index: number) => {
		const isSelected = startIndex + index === selectedIndex;

		if (item.type === 'vendor') {
			return (
				<div
					ref={(el) => {
						if (el) {
							itemRefs.current[index] = el;
						}
					}}
					tabIndex={isSelected ? 0 : -1}
					data-selected={isSelected}
					key={item.id}
					className={focusedStyles}
					onClick={() => handleSelectEntity(item)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSelectEntity(item);
						}
					}}
				>
					<VendorItem {...(item as Vendor)} />
				</div>
			);
		}
		return (
			<div
				ref={(el) => {
					if (el) {
						itemRefs.current[index] = el;
					}
				}}
				tabIndex={isSelected ? 0 : -1}
				data-selected={isSelected}
				key={item.id}
				className={focusedStyles}
				onClick={() => handleSelectEntity(item)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSelectEntity(item);
					}
				}}
			>
				<TransactionItem {...(item as Transaction)} />
			</div>
		);
	};

	return (
		<div className="mb-6" role="group" aria-label={label}>
			<h3 className="mb-2 text-sm font-medium">{label}</h3>
			<div className="space-y-1">
				{items.map((item, index) => renderItem(item, index))}
			</div>
		</div>
	);
}

export { SearchResultGroup };
