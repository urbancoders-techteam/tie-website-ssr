// ProgramFlipCard.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  content: string;
  icon: string;
}

export default function ProgramFlipCard({ title, content, icon }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-64 h-64 flex items-center justify-center"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="absolute w-[290px] h-[290px] z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#00999E"
            strokeWidth="1"
            strokeDasharray="58 17"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        className={`relative w-64 h-64 transition-transform duration-700 transform-style-preserve-3d rounded-full border border-gray-200 shadow-lg z-10 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-white rounded-full px-4 py-5">
          <Image src={icon} alt="icon" width={60} height={60} />
          <h3 className="text-center m-2 text-lg">{title}</h3>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center rounded-full text-white text-center px-4 py-5 bg-gradient-to-b from-[#00DFE7] to-[#008C90]">
          <p className="text-xs leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
