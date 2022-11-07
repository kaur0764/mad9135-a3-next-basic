import Navbar from "./NavBar";
import Image from "next/image";
function Header() {
  return (
    <header>
      <h1>
        <a href="./">
          <Image src="/logo.png" alt="Company Name" width={32} height={48} />
          <p>Madd</p>
        </a>
      </h1>
      <Navbar />
    </header>
  );
}
export default Header;
