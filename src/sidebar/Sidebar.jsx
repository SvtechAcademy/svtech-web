import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">About Me</span>
        <img src="https://avatars.githubusercontent.com/u/193590973?s=48&v=4" alt="Profile" />
        <p>
          Lorem ipsum dolor sit, 
          <br/>amet consectetur adipisicing elit. 
    
        </p>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">Categories</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Coding</li>
          <li className="sidebarlistitem">Spoken</li>
          <li className="sidebarlistitem">Maintenance</li>
          <li className="sidebarlistitem">Web Development</li>
          <li className="sidebarlistitem">App Development</li>
          <li className="sidebarlistitem">Tech News</li>
        </ul>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">Follow Us</span>
        <div className="sidebarsocial">
          <i className="sidebaricon fa-brands fa-square-facebook"></i>
          <i className="sidebaricon fa-brands fa-twitter"></i>
          <i className="sidebaricon fa-brands fa-instagram"></i>
          <i className="sidebaricon fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
