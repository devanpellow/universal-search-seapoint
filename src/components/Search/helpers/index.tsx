import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useSearchContext } from '../SearchProvider';

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

export function useSearchToggle() {
	const [isOpen, setIsOpen] = useState(false);

	const openSearch = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeSearch = useCallback(() => {
		setIsOpen(false);
	}, []);

	// Keyboard shortcuts for opening/closing search
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k' && !isOpen) {
				e.preventDefault();
				openSearch();
			}

			if (
				e.key === '/' &&
				!isOpen &&
				!['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')
			) {
				e.preventDefault();
				openSearch();
			}

			if (e.key === 'Escape' && isOpen) {
				e.preventDefault();
				closeSearch();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, openSearch, closeSearch]);

	return {
		isOpen,
		openSearch,
		closeSearch,
	};
}

const highlightText = (text: string, query: string) => {
	const queryWithoutPrefix = query.replace(/^[^:]+:\s*/, '');
	if (!queryWithoutPrefix) return text;

	const regex = new RegExp(`(${queryWithoutPrefix})`, 'gi');
	const parts = text.split(regex);

	return parts.map((part, i) =>
		regex.test(part) ? (
			<span key={i} className="text-blue-400">
				{part}
			</span>
		) : (
			part
		)
	);
};

export const HighlightedText = ({ text }: { text: string }) => {
	const { query } = useSearchContext();
	return <>{highlightText(text, query)}</>;
};
