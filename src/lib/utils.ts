import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ResultGroup, SearchResult, ResultGroupType } from './types';
import { GROUP_LABELS } from './constants';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function groupSearchResults(items: SearchResult[]): ResultGroup[] {
	const groupedItems: Record<string, SearchResult[]> = {};

	items.forEach((item) => {
		const type = 'type' in item ? item.type : 'vendor';

		if (!groupedItems[type]) {
			groupedItems[type] = [];
		}

		groupedItems[type].push(item);
	});

	return Object.keys(groupedItems).map((type) => ({
		id: type,
		label:
			GROUP_LABELS[type as ResultGroupType] ||
			`${type.charAt(0).toUpperCase()}${type.slice(1)}s`,
		items: groupedItems[type],
	}));
}
