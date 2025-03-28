import { Button } from '@/components/ui/button';
import { useSearchContext } from './SearchProvider';

function SearchTriggerButton() {
	const isMacOS = navigator.userAgent.includes('Mac');
	const { openSearch, isOpen, closeSearch } = useSearchContext();

  return (
    <Button
      variant="secondary"
			className="flex w-80 items-center justify-between gap-2 cursor-pointer"
			aria-label="Open universalsearch dialog"
			title={`Search (${isMacOS ? '⌘' : 'Ctrl'}+K)`}
			onClick={() => {
				if (isOpen) closeSearch();
				else openSearch();
			}}
		>
			<span className="text-muted-foreground">Search...</span>
      <kbd
        className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border
					bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground"
        aria-hidden="true"
      >
        <span className="text-xs">
          {isMacOS ? <span className="relative top-[1px]">⌘</span> : "Ctrl"} + k
        </span>
      </kbd>
    </Button>
  );
}

export { SearchTriggerButton };
