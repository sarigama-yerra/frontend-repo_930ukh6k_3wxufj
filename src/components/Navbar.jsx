import { Search, Bell, User } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <a href="#" className="text-red-600 font-extrabold text-2xl tracking-tight">
              Flix
            </a>
            <nav className="hidden md:flex items-center gap-4 text-sm text-white/80">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">Series</a>
              <a href="#" className="hover:text-white">Films</a>
              <a href="#" className="hover:text-white">New & Popular</a>
              <a href="#" className="hover:text-white">My List</a>
            </nav>
          </div>

          <div className="flex items-center gap-4 text-white">
            <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <Search size={16} className="text-white/70" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent placeholder-white/60 text-sm focus:outline-none text-white w-36"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-white/10 transition">
              <Bell size={20} />
            </button>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-3 py-1.5 rounded-full">
              <User size={18} />
              <span className="hidden sm:inline text-sm">Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
