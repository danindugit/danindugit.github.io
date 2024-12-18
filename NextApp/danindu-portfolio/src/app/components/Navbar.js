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
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navigation">
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
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Internships
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="/RocheWTR" className="dropdown-item">
                  Roche
                </Link>
                <Link href="/RBC_WTR" className="dropdown-item">
                  RBC
                </Link>
                <Link href="/CooperatorsWTR" className="dropdown-item">
                  Co-operators
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
