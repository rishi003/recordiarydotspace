import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo left">
              Logo
            </a>
            <a
              href="#"
              data-target="slide-out"
              className="sidenav-trigger right"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Posts</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
