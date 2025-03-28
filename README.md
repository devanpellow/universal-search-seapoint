Implementation Plan:

Step 1:
- Create project with vite react-ts
- Install dependencies such as storybook, tailwind, and shadcn. 

Step 2:
- Use Figma to design the components. 
- Design landing page with figma. 

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
- Connect the search provider to the search dialog component.
- Group the search results by type. Assuming that we will have different types in the future, I tried to make the group by type dynamic and easy to create new groups types.


Step 6:


Assumptions/Expansions:
- We will have different types of search results in the future.
- We will have different groups of search results in the future.
- I expanded the mock data to include more entities to test the search functionality.
- groupSearchResults will limit the number of items in each group to 5, so that the search function can be reused throughout the app and not limit the number of results.
- I added a loading state when initally searching, but did not add a loading state when results are already shown to avoid flickering and results being showing with skeleton.


