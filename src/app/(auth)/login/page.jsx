import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="card w-full max-w-md shadow-xl bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-center text-primary">Login</h2>

        <form className="mt-6 space-y-4">
          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary w-full">Login</button>
        </form>

        <div className="divider">OR</div>

        <button className="btn btn-outline w-full">Continue with Google</button>

        <p className="text-center mt-4">
          New here?{" "}
          <Link href="/register" className="text-primary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}