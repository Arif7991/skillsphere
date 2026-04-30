import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="card w-full max-w-md shadow-xl bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center text-primary">
          Register
        </h2>

        <form className="mt-6 space-y-4">
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-medium">Photo URL</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary w-full">Register</button>
        </form>

        <div className="divider">OR</div>

        <button className="btn btn-outline w-full">Continue with Google</button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}