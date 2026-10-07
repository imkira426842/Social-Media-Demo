function Welcome_Message({ handleInitialPosts }) {
  return (
    <>
      <div className="Welcome_Message">
        <center>
          <h1>There is no Post Available Right Now</h1>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleInitialPosts}
          >
            ADD POSTS
          </button>
        </center>
      </div>
    </>
  );
}
export default Welcome_Message;
