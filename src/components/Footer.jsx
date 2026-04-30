import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 mt-10">
      <div className="footer p-10 text-base-content max-w-6xl mx-auto">
        <aside>
          <h2 className="text-2xl font-bold text-primary">SkillSphere</h2>
          <p className="mt-2">
            Upgrade your skills with modern online learning courses.
          </p>
          <p className="mt-2">
            Email: support@skillsphere.com <br />
            Phone: +880 1234-567890
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="/courses" className="link link-hover">
            Courses
          </Link>
          <Link href="/my-profile" className="link link-hover">
            My Profile
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="#" className="link link-hover">
            Terms & Conditions
          </Link>
          <Link href="#" className="link link-hover">
            Privacy Policy
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover" href="#">
            Facebook
          </a>
          <a className="link link-hover" href="#">
            YouTube
          </a>
          <a className="link link-hover" href="#">
            LinkedIn
          </a>
        </nav>
      </div>

      <div className="text-center p-4 bg-base-300 text-base-content">
        <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}