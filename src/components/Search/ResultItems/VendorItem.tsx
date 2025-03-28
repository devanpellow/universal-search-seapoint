import { Vendor } from '@/lib/types';
import { HighlightedText } from '../helpers';
import { Building } from 'lucide-react';

interface VendorItemProps extends Vendor {
	isSelected: boolean;
}

const VendorItem = ({ id, name, email, isSelected }: VendorItemProps) => {
	return (
		<div
			className="flex flex-col w-full hover:bg-muted border border-border p-2 rounded-md cursor-pointer"
			key={id}
			aria-labelledby={`vendor-${id}-name`}
			role="article"
			tabIndex={0}
		>
			<div className="flex justify-between">
				<h3
					id={`vendor-${id}-name`}
					className="flex items-center text-lg font-semibold"
				>
					<span className="mr-2" aria-hidden="true">
						<Building className="w-4 h-4" />
					</span>
					<HighlightedText text={name} />
				</h3>
				<p className="text-xs text-muted-foreground">
					<span className="sr-only">Vendor ID:</span>
					<span aria-hidden="true">ID: </span>
					<HighlightedText text={id} />
				</p>
			</div>
			<div className="flex justify-between mt-1">
				<p className="text-sm text-muted-foreground">
					<span aria-hidden="true" className="sr-only">
						Email:
					</span>
					<HighlightedText text={email} />
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

export { VendorItem };
