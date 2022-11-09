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
        .filter((postData) =>
          postData.title.toLowerCase().includes(states.searchText.toLowerCase())
        )
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
