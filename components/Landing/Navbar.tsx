import Link from "next/link"
import Github from "../UI/Github";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className=" font-semibold tracking-tight pt-3">
          <span className="text-[28px]">Work</span><span className="text-red-400 font-great-vibes text-[38px]">Suite</span>
        </a>

        {/* Actions */}
        <nav className="flex items-center gap-10">
          <Github/>

          <Link
            href="/signin"
            className="text-[16px] text-zinc-600 font-semibold hover:text-zinc-900  transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
