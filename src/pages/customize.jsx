import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function CustomizeStrip() {
  const [layoutId, setLayoutId] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [frameColor, setFrameColor] = useState("#000000");
  const [customColor, setCustomColor] = useState("#e9d5ff");
  const stripRef = useRef(null);
<<<<<<< Updated upstream
=======
  
  const API_BASE_URL = "https://labpemwebbe.vercel.app";

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "error",
  });
>>>>>>> Stashed changes

  const presetColors = [
    "#FFFFFF", // White
    "#F5F5F4", // Light gray
    "#000000", // Black
    "#FEF3C7", // Cream
    "#D1FAE5", // Mint
    "#DBEAFE", // Light blue
    "#FDE68A", // Yellow
    "#E9D5FF", // Lavender
  ];

  useEffect(() => {
    try {
      const lId = localStorage.getItem("selectedLayoutId");
      const photosJson = localStorage.getItem("takenPhotos");
      
      if (!photosJson) {
        setLoading(false);
        return;
      }

      const parsed = JSON.parse(photosJson);
      
      if (!Array.isArray(parsed) || parsed.length === 0) {
        setLoading(false);
        return;
      }

      setLayoutId(lId);
      setPhotos(parsed);
      setLoading(false);
      
    } catch (err) {
      console.error("Error loading photos:", err);
      setLoading(false);
    }
  }, []);

  const layoutClass = () => {
    switch (layoutId) {
      case "layout-1":
        return "grid-rows-4";
      case "layout-2":
        return "grid-rows-3";
      case "layout-3":
        return "grid-rows-3";
      case "layout-4":
        return "grid-rows-3";
      default:
        return "grid-rows-4";
    }
  };

  const getStripHeight = () => {
    switch (layoutId) {
      case "layout-1":
        return photos.length * 200;
      case "layout-2":
      case "layout-3":
      case "layout-4":
        return photos.length * 220;
      default:
        return photos.length * 200;
    }
  };

  const handleDownload = async () => {
    if (!stripRef.current) return;

    try {
      // Dynamically import html2canvas
      const html2canvas = (await import("html2canvas")).default;
      
      const canvas = await html2canvas(stripRef.current, {
        backgroundColor: frameColor,
        scale: 2, // Higher quality
        useCORS: true,
      });
      
      const link = document.createElement("a");
      link.download = "studio-snap-photostrip.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download. Please try again.");
    }
  };

  const handleCustomColorChange = (e) => {
    const color = e.target.value;
    setCustomColor(color);
    setFrameColor(color);
  };

<<<<<<< Updated upstream
=======
  const handleFeedbackSubmit = async () => {
    if (rating === 0) {
      setPopup({
        show: true,
        message: "Please select a star rating first!",
        type: "warning",
      });
      return;
    }
    
    const storedSessionId = localStorage.getItem("current_session_id");
    const userStr = localStorage.getItem("user");
    let userId = 1;

    if (userStr) {
        try {
            const u = JSON.parse(userStr);
            userId = u.id || u._id || 1;
        } catch (e) { console.error(e); }
    }

    console.log("Mengirim feedback dengan Session ID:", storedSessionId);

    setIsSubmitting(true);
    try {
      await axios.post(`${API_BASE_URL}/api/feedback`, {
        session_id: storedSessionId ? parseInt(storedSessionId) : null, 
        user_id: userId,
        rating: rating,
        comment: comment,
      });
      setFeedbackSent(true);
    } catch (error) {
      console.error("Feedback Error:", error.response?.data || error.message);
      setPopup({
        show: true,
        message: "Failed to send feedback. Check console.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

>>>>>>> Stashed changes
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl text-[#610049]">Loading your photos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-10">
      <main className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 mt-10 px-4">
        
        {/* Photo Strip Preview */}
        <div
          ref={stripRef}
          className={`border-[12px] shadow-lg p-3 w-[280px] grid gap-3 ${layoutClass()}`}
          style={{ 
            backgroundColor: frameColor,
            borderColor: frameColor,
            height: `${getStripHeight()}px`
          }}
        >
          {photos.length === 0 && (
            <p className="text-center text-red-600">
              No photos found.{" "}
              <Link className="text-blue-500 underline" to="/cam">
                Please try again
              </Link>
              .
            </p>
          )}

          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Captured photo ${i + 1}`}
              className="w-full h-full object-cover object-top rounded-sm"
            />
          ))}
        </div>

<<<<<<< Updated upstream
        {/* Customization Panel */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <h1 className="text-3xl font-bold text-[#610049] text-center lg:text-left">
            Customize your photo strip !!!
          </h1>
=======
        <div className="flex flex-col items-center lg:items-start gap-6 w-full max-w-lg">
          <div className="w-full space-y-6">
            <div className="bg-[#FCF9E9] rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 w-full">
              <h2 className="text-lg font-bold text-[#610049] mb-4 flex items-center gap-2">
                Choose Frame Color
              </h2>
>>>>>>> Stashed changes

          {/* Frame Color Selection */}
          <div className="flex flex-col gap-3">
            <label className="text-[#610049] font-semibold">Frame Color</label>
            
            <div className="flex flex-wrap gap-2">
              {presetColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setFrameColor(color)}
                  className={`w-10 h-10 rounded-lg border-2 transition-transform hover:scale-110 ${
                    frameColor === color 
                      ? "border-[#610049] ring-2 ring-[#610049] ring-offset-2" 
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>

            {/* Custom Color Picker */}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-[#610049] font-medium">Custom :</span>
              <input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 overflow-hidden"
                style={{ padding: 0 }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button
              onClick={handleDownload}
              className="px-8 py-3 bg-[#610049] text-white rounded-full font-bold 
                         transition-all duration-200 hover:bg-[#4a0037] hover:scale-105
                         shadow-md hover:shadow-lg"
            >
              Download Photo Strip
            </button>

            <Link
              to="/cam"
              className="px-8 py-3 border-2 border-[#610049] text-[#610049] rounded-full font-bold 
                         transition-all duration-200 hover:bg-[#fce9e9] hover:scale-105"
            >
              Take New Photos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}