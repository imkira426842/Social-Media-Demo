import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostListContext);

  const useridElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const user_id = useridElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = Number(reactionsElement.current.value);
    const tags = tagsElement.current.value.split(" ");

    useridElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(user_id, title, body, reactions, tags);
  };
  return (
    <>
      <form className="CreatePost" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="user_id" className="form-label">
            User ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="user_id"
            ref={useridElement}
            placeholder="Enter Your User ID Here..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleElement}
            placeholder="What's in your mind today?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Content:
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            rows="4"
            ref={bodyElement}
            placeholder="Tell us more about it here..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions:
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={reactionsElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags:
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsElement}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          POST
        </button>
      </form>
    </>
  );
}
export default CreatePost;
