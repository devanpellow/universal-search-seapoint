import { ResultGroup, SearchResult, Transaction, Vendor } from '@/lib/types';
import { VendorItem } from './ResultItems/VendorItem';
import { TransactionItem } from './ResultItems/TransactionItem';

type SearchResultGroupProps = {
	group: ResultGroup;
};

function SearchResultGroup({ group }: SearchResultGroupProps) {
	const { items, label } = group;

	const renderItem = (item: SearchResult) => {
		if (item.type === 'vendor') {
			return <VendorItem {...(item as Vendor)} key={item.id} />;
		}
		return <TransactionItem {...(item as Transaction)} key={item.id} />;
	};

	return (
		<div className="mb-6" role="group" aria-label={label}>
			<h3 className="mb-2 text-sm font-medium">{label}</h3>
			<div className="space-y-1">{items.map((item) => renderItem(item))}</div>
		</div>
	);
}

export { SearchResultGroup };
