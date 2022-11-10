import { PostData } from "../components/MainContent";

export const dataArray: PostData[] = [
  {
    title: "My First Blog Post",
    category: "art",
    imageData: {
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGphenolMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      alt: "",
    },
    content: "This is my very first blog post using react!",
  },

  {
    title: "My Second Blog Post",
    category: "science",
    imageData: {
      src: "https://images.unsplash.com/photo-1615648091777-276a4267fde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGphenolMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      alt: "",
    },
    date: "November 9th, 2022",
    content: "This is my second blog post using react!",
  },
];
