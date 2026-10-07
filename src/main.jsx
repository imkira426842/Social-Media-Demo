import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import PostListProvider from "./store/post-list-store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostListProvider>
      <App />
    </PostListProvider>
  </StrictMode>,
);
