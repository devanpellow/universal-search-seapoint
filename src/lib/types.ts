export type Vendor = {
	id: string;
	name: string;
	email: string;
	type: 'vendor';
};

export type Transaction = {
	id: string;
	description: string;
	amount: number;
	date: string;
	vendorId: string;
	type: 'transaction';
};

export type SearchResult = Vendor | Transaction;

export function isVendor(result: SearchResult): result is Vendor {
	return result.type === 'vendor';
}

export function isTransaction(result: SearchResult): result is Transaction {
	return result.type === 'transaction';
}

export type SearchNavigationState = {
	selectedGroupIndex: number;
	selectedItemIndex: number;
};

export enum ResultGroupType {
	VENDOR = 'vendor',
	TRANSACTION = 'transaction',
}

export type ResultGroup = {
	id: string;
	label: string;
	items: SearchResult[];
};
