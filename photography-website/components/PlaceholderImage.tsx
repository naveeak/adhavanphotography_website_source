'use client';

import Image from 'next/image';

export default function PlaceholderImage({ width, height, alt }: { width: number; height: number; alt: string }) {
  return (
    <div 
      style={{ width, height }}
      className="bg-gray-200 relative"
    >
      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
        {width} x {height}
      </div>
    </div>
  );
}