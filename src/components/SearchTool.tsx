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
      {<button className="scienceButton">Science</button>}
      {<button className="artButton">Art</button>}
      {<button className="thoughtButton">Thought</button>}
    </div>
  );
};
