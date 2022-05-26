import logo from "./logo.svg";
import "./App.scss";

function App() {
  return <Header />;
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="react" />
        </div>

        <button
          class="nav-opener"
          onClick={() => {
            const nav = document.querySelector(".header__nav-holder");
            nav.classList.toggle("opened");
          }}
        >
          <span></span>
        </button>
        <div className="header__nav-holder">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Product
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Customers
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Pricing
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
          <ul className="btn-list">
            <li className="btn-list__item">
              <a href="#" className="btn btn_white">
                Sign In
              </a>
            </li>
            <li className="btn-list__item">
              <a href="#" className="btn">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default App;
