import { PostData } from "./MainContent";
import States from "./MainContent";
import { Post } from "./Post";

interface PostsListsProps {
  postDataArray: PostData[];
  states: States;
}

export const PostsList = ({
  postDataArray,
  states,
}: PostsListsProps): JSX.Element => {
  return (
    <div className="postsListWrapper">
      {postDataArray
        .filter((postData) => {
          //checking conditions for each postData - filter by search and category
          const isMatchingSearch = postData.title
            .toLowerCase()
            .includes(states.searchText.toLowerCase());
          const isScienceCategory = postData.category === "science";
          const isArtCategory = postData.category === "art";
          const isThoughtCategory = postData.category === "thought";

          if (states.isScienceFilter) {
            return isScienceCategory && isMatchingSearch;
          } else if (states.isArtFilter) {
            return isArtCategory && isMatchingSearch;
          } else if (states.isThoughtFilter) {
            return isThoughtCategory && isMatchingSearch;
          } else {
            return isMatchingSearch;
          }
        })
        .map((element: PostData, index) => {
          return (
            <ul key={index}>
              <Post postData={element} />
            </ul>
          );
        })}
    </div>
  );
};
