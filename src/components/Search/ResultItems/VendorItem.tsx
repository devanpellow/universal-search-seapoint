import { Vendor } from '@/lib/types';
import { HighlightedText } from '../helpers';
import { Building, BriefcaseBusiness } from 'lucide-react';

const VendorItem = (item: Vendor) => {
	const { id, name, email } = item;
	return (
		<div
			className="flex flex-col w-full hover:bg-muted border border-border p-2 rounded-md cursor-pointer"
			key={id}
			aria-labelledby={`vendor-${id}-name`}
		>
			<div className="flex justify-between">
				<h3
					id={`vendor-${id}-name`}
					className="flex items-center text-lg font-semibold"
				>
					<span className="mr-2">
						<Building className="w-4 h-4" />
					</span>
					<HighlightedText text={name} />
				</h3>
				<p className="text-xs text-muted-foreground">
					<span aria-hidden="true">ID: </span>
					<HighlightedText text={id} />
				</p>
			</div>
			<p className="text-sm text-muted-foreground">
				<span className="sr-only">Email:</span>
				<HighlightedText text={email} />
			</p>
		</div>
	);
};

export { VendorItem };
