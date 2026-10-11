import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcome_Message from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addInitialPosts, Fetching } = useContext(PostListContext);

  return (
    <>
      {Fetching && (
        <center>
          <LoadingSpinner />
        </center>
      )}
      {!Fetching && postList.length === 0 && (
        <Welcome_Message></Welcome_Message>
      )}

      {!Fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}
export default PostList;
