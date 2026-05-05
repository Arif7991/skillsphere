"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import useSession from "@/hooks/useSession";
import Link from "next/link";
import { FaUserEdit, FaEnvelope, FaUser } from "react-icons/fa";

export default function MyProfilePage() {
  const { session, loading } = useSession();

  return (
    <ProtectedRoute>
      <div className="min-h-[80vh] flex justify-center items-center px-4 py-10 bg-base-200">
        <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-content p-8 text-center relative">
            <div className="flex justify-center">
              <img
                src={
                  session?.user?.image ||
                  "https://i.ibb.co/ZYW3VTp/brown-brim.png"
                }
                alt="user"
                className="w-28 h-28 rounded-full border-4 border-base-100 shadow-lg object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-4">
              {loading ? "Loading..." : session?.user?.name || "No Name"}
            </h2>

            <p className="opacity-90 mt-1">
              Welcome to your SkillSphere Profile
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            {loading ? (
              <div className="flex justify-center py-10">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="p-5 rounded-xl border bg-base-200">
                    <div className="flex items-center gap-3 mb-2">
                      <FaUser className="text-primary text-xl" />
                      <h3 className="text-lg font-semibold">Full Name</h3>
                    </div>
                    <p className="text-base font-medium">
                      {session?.user?.name || "Not set"}
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="p-5 rounded-xl border bg-base-200">
                    <div className="flex items-center gap-3 mb-2">
                      <FaEnvelope className="text-primary text-xl" />
                      <h3 className="text-lg font-semibold">Email Address</h3>
                    </div>
                    <p className="text-base font-medium">
                      {session?.user?.email || "Not found"}
                    </p>
                  </div>
                </div>

                {/* Update Button */}
                <div className="mt-8">
                  <Link
                    href="/my-profile/update"
                    className="btn btn-primary w-full flex items-center gap-2"
                  >
                    <FaUserEdit />
                    Update Information
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}