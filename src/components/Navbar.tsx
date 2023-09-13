import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link href={"/booking"}>
              <p>Book a table or two</p>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <p>Menu</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
