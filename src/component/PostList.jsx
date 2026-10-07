import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcome_Message from "./WelcomeMessage";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListContext);

  const handleInitialPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((Data) => {
        addInitialPosts(Data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <Welcome_Message
          handleInitialPosts={handleInitialPosts}
        ></Welcome_Message>
      )}
      <div className="PostList">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
export default PostList;
