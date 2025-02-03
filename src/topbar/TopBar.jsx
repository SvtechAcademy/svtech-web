import "./TopBar.css";

const TopBar = () => {
  return (
    <div className='top'>
<div className="topleft">
    <i class="fa-brands fa-square-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-youtube"></i>
</div>
<div className="topcenter">
    <ul className="toplist">
 <li className="topitemlist">Home</li>
 <li className="topitemlist">About</li>
 <li className="topitemlist">Contact</li>
 <li className="topitemlist">Write</li>
 <li className="topitemlist">Lgout</li>
    </ul>
</div>
<div className="topimg">
    <img src="../asset/svtech.jpg" alt="svtech" />
</div>
    </div>
  );
};

export default TopBar;