import Style from "./Message.module.css";
function Message({ handleDelete }) {
  return (
    <div className={Style.message_overlay}>
      <div className={Style.message_popup}>
        <h5>Delete Post?</h5>
        <p>Are you sure you want to delete this post?</p>

        <button>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
export default Message;
