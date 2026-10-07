import { createContext, useReducer } from "react";
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
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
    NewPostList = [action.payload, ...currPostList];
  }
  return NewPostList;
};
function PostListProvider({ children }) {
  const [postList, dispatchpostList] = useReducer(postListReducer, []);

  const addPost = (user_id, title, body, reactions, tags) => {
    dispatchpostList({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        userId: user_id,
        title: title,
        body: body,
        reactions: reactions,
        tags: tags,
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
  return (
    <PostListContext value={{ postList, addPost, deletePost, addInitialPosts }}>
      {children}
    </PostListContext>
  );
}

export default PostListProvider;
