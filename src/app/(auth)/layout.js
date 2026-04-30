export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
      {children}
    </div>
  );
}