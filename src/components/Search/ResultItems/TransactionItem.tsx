import { Transaction } from '@/lib/types';
import { HighlightedText } from '../helpers';
import { CreditCard } from 'lucide-react';

interface TransactionItemProps extends Transaction {
	isSelected: boolean;
}

const TransactionItem = ({
	id,
	description,
	amount,
	date,
	vendorId,
	isSelected,
}: TransactionItemProps) => {
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
			<div className="flex justify-between mt-1">
				<p className="text-sm text-muted-foreground">
					<span className="sr-only">Vendor ID:</span>
					<span aria-hidden="true">Vendor:</span>
					<HighlightedText text={vendorId} />
				</p>
				{isSelected && (
					<div className="text-xs text-muted-foreground flex justify-end">
						<kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-[10px]">
							Enter
						</kbd>
						<span className="ml-1">to view details</span>
					</div>
				)}
			</div>
		</div>
	);
};

export { TransactionItem };
