import { useState } from "react";
import { dataArray } from "../data/PostData";
import { PostsList } from "./PostsList";
import { SearchTool } from "./SearchTool";

export interface PostData {
  title: string;
  date?: string;
  imageData: PostImage;
  content: string;
}

interface PostImage {
  src: string;
  alt: string;
}

export default interface States {
  searchText: string;
  setSearchText(newText: string): void;
}

export const MainContent = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>("");
  const StatesStore: States = {
    searchText: searchText,
    setSearchText: setSearchText,
  };
  return (
    <div className="mainContentWrapper">
      <div className="leftSideWrapper">
        <div className="mainContentTopFiller"></div>
        <PostsList postDataArray={dataArray} states={StatesStore} />
      </div>
      <div className="rightSideWrapper">
        <SearchTool states={StatesStore} />
      </div>
    </div>
  );
};
