import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Madd logo"
            width={36}
            height={52}
          />
          <p>add</p>
        </Link>
      </h1>
      <Navbar />
    </header>
  );
}
export default Header;
