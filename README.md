# Universal Search Component

## Setup

- Clone the repository
- Run `pnpm install` to install the dependencies
- Run `pnpm run dev` to start the development server
- Run `pnpm run storybook` to start the storybook server

## Demo

[Link to live demo](https://universal-search-component-demo.vercel.app/)

## My Implementation Plan:

### 1. Project Setup

- Initialized project using Vite with React and TypeScript
- Installed dependencies such as storybook, tailwind, use-debounce, and shadcn.
- Set up TailwindCSS for styling and shadcn/ui for accessible UI components
- Set up development environment with Storybook, ensuring styles are applied correctly in Storybook.
- Established project structure and code organization patterns

### 2. Design Approach

- Usually, I would have started with a Figma design or would have created my own. But for the sake of time, I first designed my components in Storybook.

### 3. Component/State Architecture

- Created components based on their single responsibility:
  - `SearchTriggerButton`: Button that triggers the search dialog, this would be a component that would be used in the header of the app. I chose to make this a component because it is reusable and can be used in different parts of the app. Can be opened via clicking the input.
  - `SearchDialog`: Main modal container that opens when the user triggers the search dialog.
    - Contains sub-components: `Hint` and `Loading` skeletons
  - `SearchInput`: Input field with query handling
  - `SearchResults`: Container for organizing and displaying search results
  - `SearchResultGroup`: Logical grouping of results by entity type. This is dynamic and should handle new entity types if the API is extended.
  - `SearchResultItem`: Templated items for different entity types (vendors, transactions)
    - Contains sub-components: `TransactionItem` and `VendorItem`. When new entity types are added this should be the only component that needs to be updated since the shape of the API response could be different.
  - `SearchProvider`: Context provider for managing search state. This would watch for keyboard events and update the state of the search dialog. I chose to use a context provider because an easy way to pass the state to all the components that need it without prop drilling.

### 4. Development Workflow

- I prefer to start building the components in Storybook. This ensures that the components are working as expected and then I can integrate them into the app.
- Created a context-based state management system with SearchProvider to manage the state of the search dialog. This
- Developed reusable Storybook decorators to simulate SearchContext state.

### 5. Search Functionality

- Implemented core search logic with the following features:
  - Real-time search with debounced input
  - Set errors when the search API returns an error
  - Group search results by entity type
  - Prefix-based filtering (e.g., "vendor:", "transaction:", "name:", "email:")
- I tried to design the system to be extendable for future entity types.

### Assumptions/Expansions:

- We will have different types of search results in the future (e.g. vendors, transactions, customers, etc.).
  - We will have different groups of search results in the future. Hence why the groupings are labeled for readability.
- I expanded the mock data to include more entities to test the search functionality.
- `groupSearchResults` will limit the number of items in each group to 5. The original search entities function could also could be passed a limit.
- I added a loading state when initally searching, but did not reapply the loading state when some results are already shown. This is to avoid flickering and results being showing above a skeleton.
- I added headings for each group of search results as well as an icon to show which type of entity. It's mentioned in the task that icons should indicate the type of entity. However, I chose to keep the labels as well to show the dynamic labelling of the results.
- Instead of having the storybook stories in a seperate folder, I added them to the component folder next to the component itself. This is to make it easier to find and modify the stories when the project grows. It's a practice we use at Pleo that seems to work well.
- A question for designers would be if I type `vendor:` should it show the first 5 vendors or should it wait for the user to type more characters? Currently it shows the first 5 vendors. Same for transactions, and other prefixes.

### Next Steps / Future Improvements:

- Presist hint when prefix is being typed so users can see the hint while typing the prefix.
- Add search by `id` to the search entities function.
- Along with the hint, I would like to add query suggestions as the user types. Similar to how I have it in the no results state.
- Chain multiple prefixes to the search query, (vendor:email:john@doe.com).
- When a user selects an entity/resource, we direct the user to that resource in the app. For now I just show the JSON object in the UI.
- A potential improvement might be adding virtualization for handling very large result sets, though this may be unnecessary for the current scale.
- Covering the component with tests, unit and integration tests using RTL and Jest.
- Implement fuzzy search. To do this I could use a library like https://www.fusejs.io/.
- Currently my highlighting will remove space between strings if I search for a query that is mid-string. Like `cloud` in `Google Cloud Platform`. I would need to improve this.

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
