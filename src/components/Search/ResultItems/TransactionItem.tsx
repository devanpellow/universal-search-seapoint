import { Transaction } from '@/lib/types';
import { HighlightedText } from '../helpers';
import { CreditCard } from 'lucide-react';

const TransactionItem = (item: Transaction) => {
	const { id, description, amount, date, vendorId } = item;

	const formattedAmount = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount);

	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});

	return (
		<div
			className="flex flex-col w-full hover:bg-muted border border-border p-2 rounded-md cursor-pointer"
			key={id}
			aria-labelledby={`transaction-${id}-description`}
			role="article"
			tabIndex={0}
		>
			<div className="flex justify-between ">
				<h3
					id={`transaction-${id}-description`}
					className="flex items-center text-lg font-semibold"
				>
					<span className="mr-2" aria-hidden="true">
						<CreditCard className="w-4 h-4" />
					</span>
					<HighlightedText text={description} />
				</h3>
				<div className="flex items-center gap-2">
					<span
						className="font-medium text-primary"
						aria-label={`Amount: ${formattedAmount}`}
					>
						<HighlightedText text={formattedAmount} />
					</span>
				</div>
			</div>
			<time
				dateTime={date}
				className="text-xs text-muted-foreground text-right"
				aria-label={`Transaction date: ${formattedDate}`}
			>
				<HighlightedText text={formattedDate} />
			</time>
			<div className="flex justify-between">
				<p className="text-sm text-muted-foreground">
					<span className="sr-only">Vendor ID:</span>
					<span aria-hidden="true">Vendor: </span>
					<HighlightedText text={vendorId} />
				</p>
				<p className="text-xs text-muted-foreground">
					<span className="sr-only">Transaction ID:</span>
					<span aria-hidden="true">ID: </span>
					<HighlightedText text={id} />
				</p>
			</div>
		</div>
	);
};

export { TransactionItem };
