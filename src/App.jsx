import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { useContext, useState } from "react";
import PostListProvider from "./store/post-list-store";
import { PostListContext } from "./store/post-list-store";
import Welcome_Message from "./component/WelcomeMessage";
function App() {
  const [SelectTab, setSelectTab] = useState("Home");
  return (
    <div className="mediaContainer">
      <Sidebar setSelectTab={setSelectTab} SelectTab={SelectTab} />
      <div className="Container">
        <Header />
        {SelectTab !== "Home" ? <CreatePost /> : <PostList />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
