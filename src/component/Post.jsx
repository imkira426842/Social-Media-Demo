import OldWallpaper from "../assets/OldWallpaper.jpg";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";
import { useContext } from "react";
import { useState } from "react";
import Message from "./Message";

function Post({ post }) {
  const [showMessage, setShowMessage] = useState(false);

  const { deletePost } = useContext(PostListContext);

  const handleDelete = () => {
    deletePost(post.id);
  };
  const totalReactions =
    typeof post.reactions === "number"
      ? post.reactions
      : post.reactions.likes + post.reactions.dislikes;
  return (
    <>
      <div className="card Post" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary tags" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This Post has been reacted by {totalReactions} people.
          </div>
          <span
            className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
            onClick={() => setShowMessage(true)}
          >
            <MdDelete />
            <span className="visually-hidden">New alerts</span>
          </span>
          {showMessage && <Message handleDelete={handleDelete} />}
        </div>
      </div>
    </>
  );
}
export default Post;
