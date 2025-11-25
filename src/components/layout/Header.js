import { Link, useLocation } from "react-router-dom";
import logoImage from "./assets/zeytuuni-logo.png";
import "./Header.css";
import pages from "../../utils/pages";

const Header = () => {
  const { pathname } = useLocation();

  // Separate normal links and the special button
  let normalLinks = Array.from(pages.values()).filter(
    (page) => page.anchorable && page.name !== "Order Online"
  );

  // Reorder Events after Menu if it exists
  const menuIndex = normalLinks.findIndex((page) => page.name === "Menu");
  const eventsIndex = normalLinks.findIndex((page) => page.name === "Events");

  if (menuIndex !== -1 && eventsIndex !== -1 && eventsIndex < menuIndex) {
    // remove Events from current position
    const [eventsPage] = normalLinks.splice(eventsIndex, 1);
    // insert Events after Menu
    normalLinks.splice(menuIndex + 1, 0, eventsPage);
  }

  const orderOnlinePage = Array.from(pages.values()).find(
    (page) => page.name === "Order Online"
  );

  return (
    <header className="header">
      <div className="container header-inner">
        {/* LEFT: Logo */}
        <div className="header-left">
          <Link to={pages.get("home").path}>
            <img
              className="header__logo"
              src={logoImage}
              alt="restaurant logo"
            />
          </Link>
        </div>

        {/* CENTER: Normal Links */}
        <nav className="header-center">
          <ul className="navbar__list">
            {normalLinks.map((page, index) => (
              <li key={index}>
                <Link
                  className={
                    pathname === page.path
                      ? "navbar__link current-location"
                      : "navbar__link"
                  }
                  to={page.path}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: Order Online */}
        <div className="header-right">
          {orderOnlinePage && (
            <Link className="btn--filled order-btn" to={orderOnlinePage.path}>
              Order Online
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
