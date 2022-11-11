import { PostData } from "../components/MainContent";

export const dataArray: PostData[] = [
  {
    title: "Introduction to Combinations and Permutations",
    category: "science",
    imageData: {
      src: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbWJpbmF0aW9uJTIwbG9ja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      alt: "",
    },
    content:
      "If you have an array of unique items called Set. How many different ways can you order those items? There is NO replacement in this problem as each item is only being used/indexed once in the array. If the number of items is N, the number of possible orderings is N! More specifically it is: N!/(N-K)! OR N!/(0! Which === N!). Think about it like this: At array[0] there are N items to choose from. However at array[1] there are are only N-1 (as one item was already placed at index 0). If you think of an array like a combination lock, with each index representing one digit of the combination lock, the first index/digit has all the possible items to choose from (N) but this decreases by one each index until the last index where there is only one possible item. Multiplying the number possibilities for each index together gives you the overall number of possible orders.",
  },

  {
    title: "Jazz Music as a Language",
    category: "art",
    imageData: {
      src: "https://images.unsplash.com/photo-1615648091777-276a4267fde1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGphenolMjBtdXNpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      alt: "",
    },
    date: "November 9th, 2022",
    content: "Content to be uploaded soon!",
  },
];
