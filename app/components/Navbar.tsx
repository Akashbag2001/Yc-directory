

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logo.png";
import { auth, signOut, signIn } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/">
          <Image src={logo} alt="logo" width={100} height={38} />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              {/* Authenticated User Links */}
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <button onClick={signOut} className="text-red-500">
                <span>Logout</span>
              </button>

              <Link href={`/user/${session.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            // Sign-In Button for Non-Authenticated Users
            <button onClick={signIn('github')} className="text-blue-500">
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
