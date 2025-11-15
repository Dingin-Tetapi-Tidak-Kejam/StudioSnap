import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LayoutStrip4Vertical = () => (
  <div className="flex flex-col h-full w-full p-1 space-y-1">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="flex-1 rounded bg-gray-300 flex items-center justify-center text-xs text-gray-500 font-semibold"
      >
        Photo - {i + 1}
      </div>
    ))}
  </div>
);

const LayoutGrid2x2 = () => (
  <div className="grid grid-cols-2 grid-rows-2 h-full w-full p-1 gap-1">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="rounded bg-gray-400 flex items-center justify-center text-xs text-gray-600 font-semibold"
      >
        Photo - {i + 1}
      </div>
    ))}
  </div>
);

const LayoutStrip2Vertical = () => (
  <div className="flex flex-col h-full w-full p-1 space-y-1">
    {[...Array(2)].map((_, i) => (
      <div
        key={i}
        className="flex-1 rounded bg-gray-500 flex items-center justify-center text-sm text-white font-semibold"
      >
        Photo - {i + 1}
      </div>
    ))}
  </div>
);

const LayoutTripleVertical = () => (
  <div className="flex flex-col h-full w-full p-1 space-y-1">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="flex-1 rounded bg-gray-700 flex items-center justify-center text-sm text-white font-semibold"
      >
        Photo - {i + 1}
      </div>
    ))}
  </div>
);

const Layout = () => {
  const [selectedLayout, setSelectedLayout] = useState(null);
  const navigate = useNavigate();

  const photoLayouts = [
    {
      id: "1",
      component: LayoutStrip4Vertical,
      alt: "Layout 1: Strip Vertikal 4 Foto",
    },
    { id: "2", component: LayoutGrid2x2, alt: "Layout 2: Grid Kotak" },
    {
      id: "3",
      component: LayoutStrip2Vertical,
      alt: "Layout 3: Strip Vertikal 2 Foto",
    },
    {
      id: "4",
      component: LayoutTripleVertical,
      alt: "Layout 4: Strip Vertikal 3 Foto",
    },
  ];

  const handleLayoutClick = (id) => {
    setSelectedLayout(selectedLayout === id ? null : id);
  };

  const handleContinue = () => {
    if (selectedLayout) {
      navigate("/cam");
    }
  };

  return (
    <div className="pt-20 pb-10 min-h-screen">
      <div className="text-center mb-10 text-[#610049]">
        <h1 className="text-[70px] mb-5 font-extrabold leading-none">
          Choose Your Layout !
        </h1>
        <p className="text-[18px] font-medium mb-10 max-w-2xl mx-auto">
          Design your photo moment, select your favorite layout and make every
          pose your own. Mix styles, strike a pose, and let's go!
        </p>
      </div>

      <div className="flex justify-center items-start px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {photoLayouts.map((layout) => (
            <div
              key={layout.id}
              onClick={() => handleLayoutClick(layout.id)}
              className={`
                w-48 h-[400px] cursor-pointer rounded-lg transition duration-300 transform hover:scale-105 
                overflow-hidden bg-white
              `}
              style={{
                border:
                  selectedLayout === layout.id
                    ? "4px solid #FFD700"
                    : "4px solid #610049",
                boxShadow:
                  selectedLayout === layout.id
                    ? "0 0 0 6px #610049, 0 0 15px rgba(255, 215, 0, 0.9)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <layout.component />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={handleContinue}
          disabled={!selectedLayout}
          className={`inline-block no-underline bg-[#FCF9E9] text-[#610049] rounded-full px-[55px]
          py-4 text-[20px] font-bold shadow-[0_2px_25px_#FFA3A3] transition-all duration-200 
          ${
            selectedLayout
              ? "hover:scale-105 hover:bg-[#FDF2D0] cursor-pointer"
              : "opacity-50 cursor-not-allowed transform-none"
          }`}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Layout;
