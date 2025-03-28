import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const ErrorState = () => {
	return (
		<div
			className="flex flex-col w-full h-full justify-center items-center py-4"
			role="status"
			aria-live="polite"
		>
			<Alert variant="destructive">
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>
					Error fetching results. Please try again or contact support.
				</AlertDescription>
			</Alert>
		</div>
	);
};

export { ErrorState };
