import { Input } from "antd";

function Search({ query, setQuery }) {
  return (
    <div>
      <Input
        value={query}
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
