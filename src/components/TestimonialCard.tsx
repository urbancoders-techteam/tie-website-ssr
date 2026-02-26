import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  name: string;
  icon: string;
  about: string;
  university: string;
  review: string;
  star: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  icon,
  about,
  university,
  review,
  star,
}) => {
  return (
    <div className="max-w-[560px] min-h-[300px] md:min-h-[380px] bg-white border border-gray-300 rounded-xl p-6 flex flex-col justify-between mx-2 mb-12 shadow-md">
      <div>
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={`text-yellow-400 text-xl`}>
              {index < star ? "★" : "☆"}
            </span>
          ))}
        </div>

        {/* Review */}
        <p className="text-sm md:text-base lg:text-lg text-gray-800 text-justify leading-relaxed mb-4">
          “{review}”
        </p>
      </div>

      {/* User Info */}
      <div className="flex gap-4 items-center mt-4">
        {icon && (
          <Image
            src={icon}
            alt={name}
            width={100}
            height={100}
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-2 border-[#00999e]"
          />
        )}
        <div className="flex flex-col">
          <h3 className="text-[#00999e] font-bold text-lg md:text-2xl">
            {name}
          </h3>
          <p className="text-sm md:text-base">{about}</p>
          <p className="text-sm md:text-base">{university}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
