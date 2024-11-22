import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png"

function Navbar() {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-center items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={144} height={30}  />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
