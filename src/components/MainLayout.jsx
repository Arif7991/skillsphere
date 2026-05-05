import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeProvider from "./ThemeProvider";

export default function MainLayout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}