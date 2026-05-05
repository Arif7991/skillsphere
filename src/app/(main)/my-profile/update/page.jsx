"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient } from "@/lib/auth-client";
import useSession from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function UpdateProfilePage() {
  const { session, loading } = useSession();
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const { data, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error?.message || "Update failed");
      return;
    }

    toast.success("Profile Updated Successfully");
    router.push("/my-profile");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-[80vh] flex justify-center items-center px-4 py-10 bg-base-200">
        <div className="w-full max-w-xl bg-base-100 shadow-xl rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Update Profile</h2>

            <Link href="/my-profile" className="btn btn-sm btn-ghost">
              <FaArrowLeft />
              Back
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-10">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="font-semibold">Name</label>
                <input
                  name="name"
                  defaultValue={session?.user?.name || ""}
                  className="input input-bordered w-full mt-2"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="font-semibold">Image URL</label>
                <input
                  name="image"
                  defaultValue={session?.user?.image || ""}
                  className="input input-bordered w-full mt-2"
                  placeholder="Enter your profile image url"
                  required
                />
              </div>

              <button className="btn btn-primary w-full flex items-center gap-2">
                <FaSave />
                Update Information
              </button>
            </form>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}