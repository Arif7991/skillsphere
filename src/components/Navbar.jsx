"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // Temporary fake auth state (later replace with BetterAuth session)
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-10 sticky top-0 z-50">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/my-profile">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          SkillSphere
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/my-profile">My Profile</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={user?.photo || "https://i.ibb.co/2d9z4gK/user.png"}
                  alt="user"
                />
              </div>
            </div>

            <button onClick={handleLogout} className="btn btn-error btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline btn-primary btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}