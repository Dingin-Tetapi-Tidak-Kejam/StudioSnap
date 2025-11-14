import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="pt-5">
      <nav className="mx-10">
        <div className="h-20 bg-[#FCF9E9] rounded-full py-3 px-8 flex items-center justify-between shadow-lg">
          <div className="text-2xl font-extrabold tracking-tight text-[#610049]">
            StudioSnap
          </div>

          <div className="flex items-center">
            <Link to="/"
              className="text-base font-semibold text-[#610049] hover:opacity-50" >
              Home
            </Link>

            <Link to="/layout"
              className="text-base font-semibold text-[#610049] hover:opacity-50 ml-8" >
              Choose Layout
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
