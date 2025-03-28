import { Vendor } from '@/lib/types';

const VendorItem = (item: Vendor) => {
	const { id, name, email } = item;
	return (
		<div className="flex flex-col gap-4" key={id}>
			<div className="flex flex-col gap-2">
				<h3 className="text-lg font-semibold">{name}</h3>
				<p className="text-sm text-muted-foreground">{email}</p>
			</div>
			<p className="text-sm text-muted-foreground">{id}</p>
		</div>
	);
};

export { VendorItem };
