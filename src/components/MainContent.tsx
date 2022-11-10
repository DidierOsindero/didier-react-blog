import { useState } from "react";
import { dataArray } from "../data/PostData";
import { PostsList } from "./PostsList";
import { SearchTool } from "./SearchTool";

//Interface for data about each blog post
export interface PostData {
  title: string;
  date?: string;
  category: "science" | "art" | "thought";
  imageData: PostImage;
  content: string;
}

//Interface for data about each blog post image
interface PostImage {
  src: string;
  alt: string;
}

//Interface for States to be passed down to child components
export default interface States {
  searchText: string;
  setSearchText(newText: string): void;
  isAllFilter: boolean;
  setIsAllFilter(newValue: boolean): void;
  isScienceFilter: boolean;
  setIsScienceFilter(newValue: boolean): void;
  isArtFilter: boolean;
  setIsArtFilter(newValue: boolean): void;
  isThoughtFilter: boolean;
  setIsThoughtFilter(newValue: boolean): void;
}

//MainContent React Component
export const MainContent = (): JSX.Element => {
  //Search Input State
  const [searchText, setSearchText] = useState<string>("");

  //Filter Button States
  const [isAllFilter, setIsAllFilter] = useState<boolean>(true);
  const [isScienceFilter, setIsScienceFilter] = useState<boolean>(false);
  const [isArtFilter, setIsArtFilter] = useState<boolean>(false);
  const [isThoughtFilter, setIsThoughtFilter] = useState<boolean>(false);

  //Store of all states to be passed down to children using interface States
  const StatesStore: States = {
    searchText: searchText,
    setSearchText: setSearchText,
    isAllFilter: isAllFilter,
    setIsAllFilter: setIsAllFilter,
    isScienceFilter: isScienceFilter,
    setIsScienceFilter: setIsScienceFilter,
    isArtFilter: isArtFilter,
    setIsArtFilter: setIsArtFilter,
    isThoughtFilter: isThoughtFilter,
    setIsThoughtFilter: setIsThoughtFilter,
  };

  return (
    <div className="mainContentWrapper">
      <div className="leftSideWrapper">
        <PostsList postDataArray={dataArray} states={StatesStore} />
      </div>
      <div className="rightSideWrapper">
        <SearchTool states={StatesStore} />
      </div>
    </div>
  );
};
