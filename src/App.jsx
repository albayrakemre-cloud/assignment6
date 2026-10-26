import { useReducer, useEffect, useState } from "react";
import { postsReducer, initialState } from "./reducer/postsReducer";
import { fetchPosts } from "./api/postsApi";
import PostList from "./components/PostList";
import FilterForm from "./components/FilterForm";

export default function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    let isMounted = true;
    
    async function loadData() {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPosts();
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      } catch (err) {
        if (isMounted) {
          dispatch({ type: "FETCH_ERROR", payload: err.message });
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Derived State (Filtreleme render sırasında yapılıyor, state'e ayrıca kaydedilmiyor)
  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Post Dashboard</h1>
      
      <FilterForm filterText={filterText} onFilterChange={setFilterText} />

      {state.loading && <p>Loading posts...</p>}
      
      {state.error && <p style={{ color: "red" }}>Error: {state.error}</p>}

      {!state.loading && !state.error && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}