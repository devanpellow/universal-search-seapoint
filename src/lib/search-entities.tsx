import { Transaction, Vendor } from './types';
import { vendors, transactions } from './mock-data';

const searchableFields = ['name', 'email', 'description', 'amount'] as const;

export function searchEntities(query: string): Promise<(Vendor | Transaction)[]> {
	const normalizedQuery = query.toLowerCase().trim();

	if (!normalizedQuery) {
		return Promise.resolve([]);
	}

	const allEntities = [...vendors, ...transactions];

	const results = allEntities.filter((entity) => {
		return searchableFields.some((field) => {
			if (field in entity) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const fieldValue = (entity as any)[field];

				if (fieldValue !== undefined && fieldValue !== null) {
					const stringValue = String(fieldValue).toLowerCase();
					return stringValue.includes(normalizedQuery);
				}
			}
			return false;
		});
	});

	return Promise.resolve(results);
}
