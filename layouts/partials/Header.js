import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Button from "@layouts/components/Button";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  // logo source
  const { logo, logo_darkmode } = config.site;

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          {/* logo */}
          <div className="order-0">
            <Logo src={logo} />
          </div>
          {/* navbar toggler */}
          <button
            id="show-button"
            className="order-2 flex cursor-pointer items-center md:hidden md:order-1"
            onClick={() => setNavOpen(!navOpen)}
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          </button>
          {/* /navbar toggler */}

          <ul
            id="nav-menu"
            className={`navbar-nav hidden ${
              navOpen ? "!block !max-h-[1000px]" : ""
            } order-3 w-full md:flex md:w-auto md:order-1 lg:space-x-2`}
          >
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link href={menu.url} className="nav-link block">
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            <li className="nav-item inline-flex items-center">
              <select className="m-2 border-none p-0 pr-8 font-primary font-bold text-text">
                <option defaultValue="en">En</option>
                <option value="de">De</option>
              </select>
            </li>
            <li className="md:hidden">
              <Button className="btn btn-primary z-0 py-[14px]" href="#" rel="">
                Get Started
              </Button>
            </li>
          </ul>
          <div className="order-1 ml-auto hidden items-center md:ml-0 md:flex md:order-2">
            <Button className="btn btn-primary z-0 py-[14px]" href="#" rel="">
              Get Started
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
