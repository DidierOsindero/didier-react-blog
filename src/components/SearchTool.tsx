import States from "./MainContent";

interface SearchToolProps {
  states: States;
}

export const SearchTool = ({ states }: SearchToolProps): JSX.Element => {
  return (
    <div className="searchToolWrapper">
      <input
        className="searchTool"
        value={states.searchText}
        onChange={(event) => states.setSearchText(event.target.value)}
      />
    </div>
  );
};
