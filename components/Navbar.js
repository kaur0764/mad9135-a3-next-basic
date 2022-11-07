import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className={router.pathname == "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/team"
            className={router.pathname == "/team" ? "active" : ""}
          >
            Our Team
          </Link>
        </li>
        <li>
          <Link
            href="/work"
            className={router.pathname == "/work" ? "active" : ""}
          >
            Our Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
