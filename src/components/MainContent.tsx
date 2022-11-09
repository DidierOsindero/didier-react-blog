import { PostsList } from "./PostsList";
import  { dataArray } from "../data/PostData";

export interface PostData {
  title: string;
  date?: Date;
  imageData: PostImage;
  content: string;
}

interface PostImage {
  src: string;
  alt: string;
}


export const MainContent = (): JSX.Element => {
  return (
    <div className="mainContentWrapper">
      <PostsList postDataArray={dataArray} />
    </div>
  );
};
