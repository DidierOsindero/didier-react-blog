import { PostData } from "./MainContent";

interface PostProps {
    postData: PostData;
}


export const Post = ({postData}:PostProps): JSX.Element => {
    return (<div className="postWrapper">
        <h3>Title</h3>
    </div>)
}