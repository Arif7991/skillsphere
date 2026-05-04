"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient } from "@/lib/auth-client";
import useSession from "@/hooks/useSession";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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

  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6">Update Profile</h2>

        <div className="card bg-base-100 shadow-xl p-6 max-w-lg">
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="font-semibold">Name</label>
              <input
                name="name"
                defaultValue={session?.user?.name || ""}
                className="input input-bordered w-full"
                placeholder="Enter name"
                required
              />
            </div>

            <div>
              <label className="font-semibold">Image URL</label>
              <input
                name="image"
                defaultValue={session?.user?.image || ""}
                className="input input-bordered w-full"
                placeholder="Enter image url"
                required
              />
            </div>

            <button className="btn btn-primary w-full">
              Update Information
            </button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}