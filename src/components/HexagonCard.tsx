import Image from "next/image";
import Link from "next/link";

interface HexagonalCardProps {
  data: {
    path: string;
    icon: string;
    buttontext: string;
  };
}

const clipHex = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const HexagonalCard = ({ data }: HexagonalCardProps) => {
  return (
    <Link
      href={data?.path}
      className="relative w-[180px] h-[208px] cursor-pointer group"
    >
      {/* OUTER hexagon (border layer) */}
      <div
        style={{ clipPath: clipHex }}
        className="absolute w-full h-full bg-[#00999e] z-10"
      />

      {/* INNER hexagon (text container) */}
      <div
        style={{ clipPath: clipHex }}
        className="absolute inset-1 z-20 flex items-center justify-center font-semibold text-lg text-[#00999e] bg-white transition-all duration-300 group-hover:bg-[#00999e] group-hover:text-white"
      >
        {data?.buttontext}
      </div>

      {/* Floating Icon Hexagon */}
      <div className="absolute top-[-32px] left-1/2 transform -translate-x-1/2 z-30">
        <div
          style={{ clipPath: clipHex }}
          className="w-[64px] h-[64px] bg-[#00999e] flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-white"
        >
          <Image
            src={data.icon}
            alt={data.buttontext}
            width={32}
            height={32}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </Link>
  );
};

export default HexagonalCard;
