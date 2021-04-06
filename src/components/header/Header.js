import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <button className="save" type="button">
        Edit
      </button>

      <h5 className="header-logo">
        Galley<span className="header-logo-span">Assistant</span>
      </h5>
      <div className="header-service">
        <div className="header-service-buttons">
          <button>HB | Hot Breakfast</button>
          <button id="service-active">LD | Lunch</button>
          <button>WS | Warm Sandwich</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
