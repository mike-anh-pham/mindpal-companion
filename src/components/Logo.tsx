import React from "react";

export const Logo = ({ className = "w-8 h-8", ...props }: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Main Chat Bubble Shape */}
    <path
      d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 60.8 14.3 70.6 21.4 77.9L15 90L29.6 86.4C35.6 88.7 42.1 90 49 90H50Z"
      fill="currentColor"
      className="text-primary"
      fillOpacity="0.2"
    />
    <path
      d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 60.8 14.3 70.6 21.4 77.9L15 90L29.6 86.4C35.6 88.7 42.1 90 49 90H50Z"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    />
    
    {/* Inner Heart/Leaf Shape */}
    <path
      d="M50 35C44.5 35 40 39.5 40 45C40 56 50 65 50 65C50 65 60 56 60 45C60 39.5 55.5 35 50 35Z"
      fill="currentColor"
      className="text-accent"
    />
    
    {/* Sparkles */}
    <path
      d="M75 30L77 25L79 30L84 32L79 34L77 39L75 34L70 32L75 30Z"
      fill="currentColor"
      className="text-warning"
    />
  </svg>
);
