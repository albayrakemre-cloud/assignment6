// Filter posts by title
export default function FilterForm({ filterText, onFilterChange }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Filter posts by title..."
        value={filterText}
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
    </div>
  );
}
