import { useSearchContext } from '../SearchProvider';

const highlightText = (text: string, query: string) => {
	if (!query) return text;

	const regex = new RegExp(`(${query})`, 'gi');
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
