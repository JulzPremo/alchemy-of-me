import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-wrapper">
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="nav-container">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/music" className="nav-link">Music</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/spiritual" className="nav-link">Spiritual Tools</Link>
        </nav>
      </div>
    </header>
  );
}
