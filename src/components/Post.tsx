import { useState } from "react";
import { PostData } from "./MainContent";
import { toTitleCase } from "../utils/toTitleCase";

interface PostProps {
  postData: PostData;
}

export const Post = ({ postData }: PostProps): JSX.Element => {
  //State which tracks if post is clicked
  const [isPostClicked, setIsPostClicked] = useState<boolean>(false);

  //Handle click of post
  const handlePostClick = (): void => {
    setIsPostClicked((prev) => !prev);
  };

  return (
    <div className="postWrapper" onClick={handlePostClick}>
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
        {isPostClicked ? (
          <p>{postData.content}</p>
        ) : (
          <small>Click To Read More...</small>
        )}
      </div>
    </div>
  );
};
