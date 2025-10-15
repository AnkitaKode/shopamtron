import React from "react";

export default function Background({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0f172a] text-blue-100 overflow-hidden">
      
      {/* Base dark background */}
      <div className="fixed inset-0 -z-30 bg-[#0f172a]" />

      {/* Transparent gradient orbs */}
      <div className="fixed inset-0 -z-20">
        {/* Top-right large orb */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-700/30 via-teal-600/20 to-transparent rounded-full blur-3xl animate-fluid-1" />
        
        {/* Bottom-left large orb */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/25 via-cyan-400/15 to-transparent rounded-full blur-3xl animate-fluid-2" />
        
        {/* Center medium orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-blue-600/20 via-teal-500/10 to-transparent rounded-full blur-2xl animate-fluid-3" />
        
        {/* Top-left small accent orb */}
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent rounded-full blur-2xl animate-fluid-4" />
        
        {/* Bottom-right small accent orb */}
        <div className="absolute bottom-40 right-40 w-[250px] h-[250px] bg-gradient-to-tl from-teal-400/20 via-blue-500/10 to-transparent rounded-full blur-2xl animate-fluid-5" />

        {/* Subtle flowing lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-flow-line" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-flow-line-delayed" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-flow-line-slow" />
        </div>

        {/* Soft transparent radial glow */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-transparent to-transparent" />
      </div>

      {/* White star particles */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-star"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
