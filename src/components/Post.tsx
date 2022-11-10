import { PostData } from "./MainContent";
import { toTitleCase } from "../utils/toTitleCase";

interface PostProps {
  postData: PostData;
}

export const Post = ({ postData }: PostProps): JSX.Element => {
  return (
    <div className="postWrapper">
      <div className="postHeadingWrapper">
      <div className="postCategoryWrapper">
        <small>{toTitleCase(postData.category)}</small>
      </div>
        <h3 className="postTitle">{postData.title}</h3>
        {postData.date && <i className="postDate">{postData.date}</i>}
      </div>
      <hr />
      <div className="postImageWrapper">
        <img src={postData.imageData.src} alt={postData.imageData.alt} />
      </div>
      <div className="postContentWrapper">
        <p>{postData.content}</p>
      </div>
    </div>
  );
};
