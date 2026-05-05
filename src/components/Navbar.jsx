"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import useSession from "@/hooks/useSession";
import { toast } from "react-toastify";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeProvider from "@/components/ThemeProvider";
export default function Navbar() {
  const router = useRouter();
  const { session, loading } = useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-primary">
          SkillSphere
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link href="/" className="btn btn-ghost">
          Home
        </Link>

        <Link href="/courses" className="btn btn-ghost">
          Courses
        </Link>

        <Link href="/my-profile" className="btn btn-ghost">
          My Profile
        </Link>

        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : session?.user ? (
          <div className="flex items-center gap-3">
            <img
              src={session.user.image || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
              className="w-10 h-10 rounded-full border"
              alt="user"
            />

            <button onClick={handleLogout} className="btn btn-error btn-sm">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-outline btn-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}