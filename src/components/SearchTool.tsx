import States from "./MainContent";

interface SearchToolProps {
  states: States;
}

export const SearchTool = ({ states }: SearchToolProps): JSX.Element => {
  //Filter handler Functions
  const handleAllFilter = () => {
    states.setIsAllFilter(true);
    states.setIsScienceFilter(false);
    states.setIsArtFilter(false);
    states.setIsThoughtFilter(false);
  };
  const handleScienceFilter = () => {
    states.setIsAllFilter(false);
    states.setIsScienceFilter(true);
    states.setIsArtFilter(false);
    states.setIsThoughtFilter(false);
  };

  const handleArtFilter = () => {
    states.setIsAllFilter(false);
    states.setIsScienceFilter(false);
    states.setIsArtFilter(true);
    states.setIsThoughtFilter(false);
  };

  const handleThoughtFilter = () => {
    states.setIsAllFilter(false);
    states.setIsScienceFilter(false);
    states.setIsArtFilter(false);
    states.setIsThoughtFilter(true);
  };

  return (
    <div className="searchToolWrapper">
      <input
        className="searchTool"
        value={states.searchText}
        onChange={(event) => states.setSearchText(event.target.value)}
      />
      <div className="filterButtonWrapper">
        {
          <button className="allFilterButton" onClick={handleAllFilter}>
            All
          </button>
        }
        {
          <button className="scienceFilterButton" onClick={handleScienceFilter}>
            Science
          </button>
        }
        {
          <button className="artFilterButton" onClick={handleArtFilter}>
            Art
          </button>
        }
        {
          <button className="thoughtFilterButton" onClick={handleThoughtFilter}>
            Thought
          </button>
        }
      </div>
    </div>
  );
};


