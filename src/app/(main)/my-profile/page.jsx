"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import useSession from "@/hooks/useSession";
import Link from "next/link";

export default function MyProfilePage() {
  const { session, loading } = useSession();

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6">My Profile</h2>

        {loading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="card bg-base-100 shadow-xl p-6 max-w-lg">
            <div className="flex items-center gap-4">
              <img
                src={session?.user?.image || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                alt="user"
                className="w-20 h-20 rounded-full border"
              />

              <div>
                <h3 className="text-xl font-bold">{session?.user?.name}</h3>
                <p className="text-gray-500">{session?.user?.email}</p>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/my-profile/update" className="btn btn-primary w-full">
                Update Information
              </Link>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}