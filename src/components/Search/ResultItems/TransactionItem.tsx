import { Transaction } from '@/lib/types';

const TransactionItem = (item: Transaction) => {
	const { id, description, amount, date, vendorId } = item;
	return (
		<div className="flex flex-col gap-4" key={id}>
			<div className="flex flex-col gap-2">
				<h3 className="text-lg font-semibold">{description}</h3>
				<p className="text-sm text-muted-foreground">{date}</p>
			</div>
			<p className="text-sm text-muted-foreground">{amount}</p>
			<p className="text-sm text-muted-foreground">{vendorId}</p>
		</div>
	);
};

export { TransactionItem };
