import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navigation fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link href="/" className="navbar-brand font-tertiary h3">
          <h4 className="logo">Danindu's Portfolio</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Internships
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Roche
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  RBC
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Co-operators
                </a>
              </li>
            </ul>
          </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
