import { ResultGroupType } from './types';

export const GROUP_LABELS: Record<ResultGroupType, string> = {
	[ResultGroupType.VENDOR]: 'Vendors',
	[ResultGroupType.TRANSACTION]: 'Transactions',
};
