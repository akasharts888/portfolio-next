// components/ProfileImage.js
"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProfileImage({ src, alt, width, height, className, size = "medium" }) {
  const [imageError, setImageError] = useState(false);

  // Size classes for different use cases
  const sizeClasses = {
    small: "w-24 h-24 md:w-32 md:h-32 border-2",
    medium: "w-32 h-32 md:w-48 md:h-48 border-3",
    large: "w-48 h-48 md:w-64 md:h-64 border-4"
  };

  const borderClasses = {
    small: "border-cyan-400/30",
    medium: "border-cyan-400/20",
    large: "border-cyan-400/20"
  };

  if (imageError) {
    return (
      <div 
        className={`rounded-full overflow-hidden shadow-lg flex items-center justify-center ${sizeClasses[size]} ${borderClasses[size]} bg-gradient-to-br from-cyan-400 to-purple-500`}
      >
        <span className="text-white text-2xl font-bold">
          {alt ? alt.charAt(0).toUpperCase() : 'A'}
        </span>
      </div>
    );
  }

  return (
    <div className={`rounded-full overflow-hidden ${sizeClasses[size]} ${borderClasses[size]} shadow-lg shadow-cyan-400/20`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover ${className}`}
        onError={() => setImageError(true)}
      />
    </div>
  );
}