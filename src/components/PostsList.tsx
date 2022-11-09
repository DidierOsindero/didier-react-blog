import { PostData } from "./MainContent";
import { Post } from "./Post";

interface PostsListsProps {
  postDataArray: PostData[];
}

export const PostsList = ({ postDataArray }: PostsListsProps): JSX.Element => {
  return (
    <div className="postsListWrapper">
      {postDataArray.map((element: PostData) => {
        <ul>
          <Post postData={element} />
        </ul>;
      })}
    </div>
  );
};
