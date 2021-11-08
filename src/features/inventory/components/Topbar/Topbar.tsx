const Topbar = () => {
  return (
    <div className="header5 js-header4">
      <button className="header5__burger js-header4-burger">
        <svg className="icon icon-burger">
          <use xlinkHref="/assets/square/img/sprite.svg#icon-burger"></use>
        </svg>
      </button>
      <a className="header5__logo" href="#">
        <img
          className="header5__pic header5__pic_black"
        //   src="/assets/square/img/logo.svg"
          alt=""
        />
        <img
          className="header5__pic header5__pic_white"
        //   src="/assets/square/img/logo-white.svg"
          alt=""
        />
      </a>
      <button className="header5__notifications">
        <svg className="icon icon-bell">
          {/* <use xlinkHref="/assets/square/img/sprite.svg#icon-bell"></use> */}
        </svg>
      </button>

      <div className="header5__bg js-header4-bg"></div>
    </div>
  );
};

export default Topbar;
