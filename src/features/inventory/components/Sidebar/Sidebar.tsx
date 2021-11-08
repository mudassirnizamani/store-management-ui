import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar5 js-sidebar4">
      <div className="sidebar5__top">
        <button className="sidebar5__close js-sidebar4-close">
          <svg className="icon icon-close">
            <use xlinkHref="assets/square/img/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <a className="sidebar5__logo">
          <img
            className="sidebar5__pic"
            // src="/assets/square/img/logo-white.svg"
            alt=""
          />
        </a>
      </div>
      <div className="sidebar5__wrapper">
        <div className="sidebar5__nav">
          <Link className="sidebar5__item" to="/">
            <svg className="icon icon-dashboard">
              <use xlinkHref="/assets/square/img/sprite.svg#icon-dashboard"></use>
            </svg>
            Home
          </Link>

          <Link className="sidebar5__item" to="/create">
            <svg className="icon icon-draft">
              <use xlinkHref="/assets/square/img/sprite.svg#icon-draft"></use>
            </svg>
            New Inventory
          </Link>
        </div>
      </div>
      {/* <a className="sidebar5__logout">
        <svg className="icon icon-logout">
          <use xlinkHref="/assets/square/img/sprite.svg#icon-logout"></use>
        </svg>
        Logout from Square
      </a> */}
    </div>
  );
};

export default Sidebar;
