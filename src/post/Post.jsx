import "./Post.css";



const Post = () => {
  return (
    <div className="post">
      <img className="postimg" src="https://avatars.githubusercontent.com/u/193590973?s=48&v=4" alt="" />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Coding</span>
          <span className="postcat">Spoken</span>
        </div>
        <span className="posttitle">
          Lorem ipsum dolor consequuntur facilis! Nisi.
        </span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
    </div>
  );
};

export default Post;
