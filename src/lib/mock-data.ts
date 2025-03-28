import { Transaction, Vendor } from './types';

export const vendors: Vendor[] = [
	{ id: 'v1', name: 'Apple Inc', email: 'payments@apple.com', type: 'vendor' },
	{ id: 'v2', name: 'Amazon', email: 'billing@amazon.com', type: 'vendor' },
	{ id: 'v3', name: 'Netflix', email: 'billing@netflix.com', type: 'vendor' },
	{ id: 'v4', name: 'Google', email: 'payments@google.com', type: 'vendor' },
	{
		id: 'v5',
		name: 'Microsoft',
		email: 'billing@microsoft.com',
		type: 'vendor',
	},
	{ id: 'v6', name: 'Facebook', email: 'billing@facebook.com', type: 'vendor' },
];

export const transactions: Transaction[] = [
	{
		id: 't1',
		description: 'iPhone 14 Pro',
		amount: 999,
		date: '2024-02-20',
		vendorId: 'v1',
		type: 'transaction',
	},
	{
		id: 't2',
		description: 'AWS Services',
		amount: 150,
		date: '2024-02-19',
		vendorId: 'v2',
		type: 'transaction',
	},
	{
		id: 't3',
		description: 'Netflix Subscription',
		amount: 15.99,
		date: '2024-02-18',
		vendorId: 'v3',
		type: 'transaction',
	},
	{
		id: 't4',
		description: 'Google Cloud Platform',
		amount: 250,
		date: '2024-02-17',
		vendorId: 'v4',
		type: 'transaction',
	},
	{
		id: 't5',
		description: 'Microsoft Office 365',
		amount: 9.99,
		date: '2024-02-16',
		vendorId: 'v5',
		type: 'transaction',
	},
	{
		id: 't6',
		description: 'Facebook Ads',
		amount: 100,
		date: '2024-02-15',
		vendorId: 'v6',
		type: 'transaction',
	},
];
