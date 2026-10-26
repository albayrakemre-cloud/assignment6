# Post Dashboard (Assignment 6)

## File Organization
- `src/api/postsApi.js`: Contains the `fetchPosts` function interacting with JSONPlaceholder API.
- `src/reducer/postsReducer.js`: Manages async states (`FETCH_START`, `FETCH_SUCCESS`, `FETCH_ERROR`) purely.
- `src/components/Post.jsx`: Presentational component representing a single post.
- `src/components/PostList.jsx`: Renders the list of posts using `.map()`.
- `src/components/FilterForm.jsx`: Controlled input component for filtering posts.
- `src/App.jsx`: Orchestrates state, side effects (`useEffect`), and derived filtering logic.

## Challenges Faced
- Ensuring proper cleanup in `useEffect` to prevent memory leaks during asynchronous operations.
- Implementing derived state for real-time filtering without duplicating filtered results inside React state.

## Additional Notes
- Project successfully deployed and verified.
