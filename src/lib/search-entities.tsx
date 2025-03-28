import { Transaction, Vendor } from './types';
import { vendors, transactions } from './mock-data';

const searchableFields = ['name', 'email', 'description', 'amount'] as const;

export function searchEntities(
	query: string
): Promise<(Vendor | Transaction)[]> {
	const normalizedQuery = query.toLowerCase().trim();

	if (!normalizedQuery) {
		return Promise.resolve([]);
	}

	const typePrefix = normalizedQuery.match(/^(vendor|transaction):/i);
	const fieldPrefix = normalizedQuery.match(
		/^(name|email|description|amount):/i
	);

	let searchQuery = normalizedQuery;
	let entityTypeFilter: string | null = null;
	let fieldFilter: string | null = null;

	if (typePrefix) {
		entityTypeFilter = typePrefix[1].toLowerCase();
		searchQuery = searchQuery.replace(typePrefix[0], '').trim();
	}

	if (fieldPrefix) {
		fieldFilter = fieldPrefix[1].toLowerCase();
		searchQuery = searchQuery.replace(fieldPrefix[0], '').trim();
	}

	const allEntities = [...vendors, ...transactions];

	const results = allEntities.filter((entity) => {
		if (entityTypeFilter && entity.type !== entityTypeFilter) {
			return false;
		}

		if (fieldFilter) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const fieldValue = (entity as any)[fieldFilter];

			if (fieldValue !== undefined && fieldValue !== null) {
				const stringValue = String(fieldValue).toLowerCase();
				return stringValue.includes(searchQuery);
			}
			return false;
		}

		return searchableFields.some((field) => {
			if (field in entity) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const fieldValue = (entity as any)[field];

				if (fieldValue !== undefined && fieldValue !== null) {
					const stringValue = String(fieldValue).toLowerCase();
					return stringValue.includes(searchQuery);
				}
			}
			return false;
		});
	});

	return Promise.resolve(results);
}
