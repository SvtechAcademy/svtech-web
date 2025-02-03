import "./TopBar.css";

const TopBar = () => {
  return (
    <div className='top'>
      <div className="topleft">
        <i className="topicon fa-brands fa-square-facebook"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        <i className="topicon fa-brands fa-youtube"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">Home</li>
          <li className="toplistitem">About</li>
          <li className="toplistitem">Contact</li>
          <li className="toplistitem">Write</li>
          <li className="toplistitem">Logout</li>
        </ul>
      </div>
      <div className="topright">
        <img
          className="topimg"
          src="https://avatars.githubusercontent.com/u/193590973?s=48&v=4"
          alt="svtech"
        />
        <i className=" searchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;