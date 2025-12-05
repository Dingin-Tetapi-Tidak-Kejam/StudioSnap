import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLayoutClick = (e) => {
    if (!user) {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  const closePopupAndRedirect = () => {
    setShowPopup(false);
    navigate("/login");
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-[#FCF9E9] p-6 rounded-2xl shadow-2xl w-80 text-center border-2 border-[#610049] animate-bounce-in">
            <h3 className="text-2xl font-bold mb-2 text-[#610049]">Oops!</h3>
            <p className="text-[#610049] mb-6 font-medium">
              You need to log in first to choose a layout.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="border border-[#610049] text-[#610049] px-4 py-2 rounded-full font-bold hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={closePopupAndRedirect}
                className="bg-[#610049] text-white px-6 py-2 rounded-full font-bold hover:bg-[#4a003a]"
              >
                Login Now
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="pt-5">
        <nav className="mx-10">
          <div className="h-20 bg-[#FCF9E9] rounded-full py-3 px-8 flex items-center justify-between shadow-lg">
            <div className="text-2xl font-extrabold tracking-tight text-[#610049]">
              StudioSnap
            </div>

            <div className="flex items-center gap-x-6">
              <Link
                to="/"
                className="text-base font-bold text-[#610049] hover:opacity-50"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-base font-bold text-[#610049] hover:opacity-50"
              >
                About
              </Link>

              <Link
                to="/layout"
                onClick={handleLayoutClick}
                className="text-base font-bold text-[#610049] hover:opacity-50"
              >
                Choose Layout
              </Link>

              {user ? (
                <Link
                  to="/profile"
                  className="text-base font-bold text-[#610049] hover:opacity-50"
                >
                  Profile
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="text-base font-bold text-[#610049] hover:opacity-50"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
