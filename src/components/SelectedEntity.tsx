import { useSearchContext } from './Search/SearchProvider';
import { Button } from './ui/button';

export function SelectedEntity() {
	const { selectedEntity, setSelectedEntity, openSearch } = useSearchContext();

	return (
		<div className="p-4 mx-auto">
			{selectedEntity ? (
				<div className="flex flex-col gap-4 justify-center items-center">
					<pre className="text-sm bg-accent p-4 rounded-md shadow-md border border-border overflow-auto max-w-fit font-mono text-primary whitespace-pre-wrap text-left mx-auto">
						{JSON.stringify(selectedEntity, null, 2)}
					</pre>

					<Button
						variant="outline"
						size="sm"
						onClick={() => setSelectedEntity(null)}
					>
						Clear
					</Button>
				</div>
			) : (
				<p
					onClick={openSearch}
					className="text-muted-foreground text-center p-8 border border-dashed border-border rounded-md w-80 mx-auto cursor-pointer"
				>
					Search for an entity to see details here
				</p>
			)}
		</div>
	);
}
