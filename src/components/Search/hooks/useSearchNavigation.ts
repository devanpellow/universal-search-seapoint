import { useEffect, useState } from 'react';

export function useSearchNavigation(
	isOpen: boolean,
	totalResultsCount: number
) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	useEffect(() => {
		setSelectedIndex(-1);
	}, [totalResultsCount]);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyNavigation = (e: KeyboardEvent) => {
			if (!isOpen) return;

			switch (e.key) {
				case 'ArrowDown':
					e.preventDefault();
					setSelectedIndex((prev) =>
						prev >= totalResultsCount - 1 ? -1 : prev + 1
					);
					break;
				case 'ArrowUp':
					e.preventDefault();
					setSelectedIndex((prev) =>
						prev <= -1 ? totalResultsCount - 1 : prev - 1
					);
					break;
				case 'Tab':
					if (!e.shiftKey) {
						e.preventDefault();
						setSelectedIndex((prev) =>
							prev >= totalResultsCount - 1 ? -1 : prev + 1
						);
					} else {
						e.preventDefault();
						setSelectedIndex((prev) =>
							prev <= -1 ? totalResultsCount - 1 : prev - 1
						);
					}
					break;
				case 'Enter':
					if (selectedIndex >= 0 && selectedIndex < totalResultsCount) {
						e.preventDefault();
					}
					break;
			}
		};

		window.addEventListener('keydown', handleKeyNavigation);
		return () => window.removeEventListener('keydown', handleKeyNavigation);
	}, [isOpen, totalResultsCount, selectedIndex]);

	return {
		selectedIndex,
		setSelectedIndex,
	};
}
