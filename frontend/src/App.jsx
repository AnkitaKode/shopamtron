import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  useEffect(() => {
    const container = document.querySelector(".stars");
    for (let i = 0; i < 120; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Stars background */}
      <div className="stars"></div>

      {/* Main content */}
      <div className="relative z-10 p-6 fade-in">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
