# Universal Search Component

## Setup

- Clone the repository
- Run `pnpm install` to install the dependencies
- Run `pnpm run dev` to start the development server
- Run `pnpm run storybook` to start the storybook server

## My Implementation Plan:

Step 1:

- Create project with vite react-ts
- Install dependencies such as storybook, tailwind, and shadcn.

Step 2:

- For the sake of time, I didn't create the designs in Figma first, but normally I would start with a design or create my own in Figma.

Step 3:

- Define which components are needed and create components in the components folder.
  - SearchDialog (Universal search modal)
  - SearchInput (Search input component)
  - SearchResults (List of search item results that will be displayed back to the user)
  - SearchResultItem (Individual search result items component)
  - SearchResultGroup (Grouped search result items component)

Step 4:

- Build the entry point first in Storybook and the add it to the app.
- Build the dialog component first in Storybook and then add it to the app.
- Create a search provider to manage the state of the search modal.
- Create a storybook decorator to add the search provider to the storybook.
- Build the SearchResultItem, SearchResults, and SearchResultGroup components in storybook with mocked data.

Step 5:
- Implement the search function in the search provider.
- Return data from the search function
- Add error handling to the search function. And return errors to the user.
- Empty state when no results are found.
- Connect the search provider to the search dialog component.
- Group the search results by type. Assuming that we will have different types in the future, I tried to make the group by type dynamic and easy to create new groups types.

Step 6:

### Assumptions/Expansions:

- We will have different types of search results in the future (e.g. vendors, transactions, customers, etc.).
  - We will have different groups of search results in the future. Hence why the groupings are labeled for readability.
- I expanded the mock data to include more entities to test the search functionality.
- `groupSearchResults` will limit the number of items in each group to 5. The original search entities function could also could be passed a limit.
- I added a loading state when initally searching, but did not add a loading state when results are already shown and we add to the search results to avoid flickering and results being showing above a skeleton.
- I added headings for each group of search results as well as an icon to show which type of entity. Icons could replace labels in the future but I wanted to show the dynamic labelling of the results
- Instead of having the stories in a seperate folder, I added them to the component folder next to the component itself. This is to make it easier to find and modify the stories when the project grows. It's a practice we use at Pleo that seems to work well.

### Next Steps / Future Improvements:
- Presist hint when prefix is used so users can see the hint while typing the prefix.
- Chain multiple prefixes to the search query, (vendor:email:john@doe.com).
- When a user selects an entity/resource, we direct the user to that resource in the app. For now I just show the JSON object in the UI.



## Core Features Checklist

1. Search popup triggered by:
    - Pressing Ctrl/Cmd + K ✅
    - Pressing the '/' key ✅
    - Clicking a search icon in the header ✅
2. Search Interface:
    - Search input field with auto-focus when opened ✅
    - Results grouped by entity type (example Vendors, Transactions) ✅
    - Support keyboard navigation (up/down arrows, enter to select) ✅
    - Close on Escape key or clicking outside ✅
    - Show loading state while searching ✅
3. Search Results:
    - Display up to 5 results per entity type ✅
    - Each result should show:
        - Entity type icon/badge ✅
        - Primary text (name/title) ✅
        - Secondary text (e.g., amount for transactions, email for vendors) ✅

### Bonus Features (Optional)

- Search result highlighting ✅
- Fuzzy search 
- Search filters using commands (e.g., "vendor:", "transaction:") ✅
- Keyboard shortcuts shown next to actions ✅
