import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import headerPic from "../Public/images/headerPic.png";
import Image from "next/image";

// import Image from "next/image";
// import hero from "./public/images/hero.png"
export default function Header() {
  return (
    <div className="parentContainer">
      <div className="headerPic">
        <Image
          src={headerPic}
          alt="header icon"
          className="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="header">
        <ul className="header-btn">
          {/* <Image src={mainPic}
   alt='building image'
   width={1440}
   height={102} /> */}

          <Link href={"/"}>
            <li className="link-m">MAIN</li>
          </Link>
          <Link href={"/"}>
            <li className="link">GALLERY</li>
          </Link>
          <Link href={"/"}>
            <li className="link">PROJECTS</li>
          </Link>
          <Link href={"/"}>
            <li className="link">CERTIFICATIONS</li>
          </Link>
          <Link href={"/"}>
            <li className="link">CONTACTS</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
