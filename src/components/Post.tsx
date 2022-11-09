import { PostData } from "./MainContent";

interface PostProps {
  postData: PostData;
}

export const Post = ({ postData }: PostProps): JSX.Element => {
  return (
    <li className="postWrapper">
      <div className="postHeadingWrapper">
        <h3 className="postTitle">{postData.title}</h3>
        {postData.date && <i className="postDate">{postData.date}</i>}
      </div>
      <hr />
      <div className="postImageWrapper">
        <img src={postData.imagesrc} />
      </div>
      <div className="postContentWrapper">
        <p>{postData.content}</p>
      </div>
    </li>
  );
};
