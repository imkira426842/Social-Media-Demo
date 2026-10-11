import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import PostListProvider from "./store/post-list-store";
import CreatePost from "./component/CreatePost.jsx";
import PostList from "./component/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostListProvider>
      <RouterProvider router={router} />
    </PostListProvider>
  </StrictMode>,
);
