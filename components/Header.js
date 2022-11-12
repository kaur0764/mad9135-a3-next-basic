import Navbar from "./Navbar";
import Image from "next/image";
function Header() {
  return (
    <header>
      <h1>
        <a href="/">
          <Image
            src="/images/logo.png"
            alt="Madd logo"
            width={36}
            height={52}
          />
          <p>add</p>
        </a>
      </h1>
      <Navbar />
    </header>
  );
}
export default Header;
