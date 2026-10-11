import { createContext, useReducer, useEffect, useState } from "react";
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  Fetching: false,
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let NewPostList = currPostList;
  if (action.type === "Delete_Post") {
    NewPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "Initial_Posts") {
    NewPostList = action.payload.posts;
  } else if (action.type === "Add_Post") {
    NewPostList = [action.payload.post, ...currPostList];
  }
  return NewPostList;
};
function PostListProvider({ children }) {
  const [postList, dispatchpostList] = useReducer(postListReducer, []);
  const [Fetching, setFetching] = useState(false);
  const addPost = (post) => {
    dispatchpostList({
      type: "Add_Post",
      payload: {
        post,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchpostList({
      type: "Initial_Posts",
      payload: { posts },
    });
  };
  const deletePost = (postId) => {
    dispatchpostList({
      type: "Delete_Post",
      payload: {
        postId,
      },
    });
  };

  useEffect(() => {
    console.log("Fetching");
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((Data) => {
        addInitialPosts(Data.posts);
        console.log("Fetching complete");
        setFetching(false);
        console.log("complete");
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext
      value={{ postList, addPost, Fetching, deletePost, addInitialPosts }}
    >
      {children}
    </PostListContext>
  );
}

export default PostListProvider;
