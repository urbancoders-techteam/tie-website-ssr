import Image from "next/image";

export  const FlipCardBox = ({
  data,
}: {
  data: { title: string; image: string; items: string[] };
}) => {
  return (
    <div className="group w-[220px] h-[220px] [perspective:1200px] block">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-[#fff] text-white rounded-xl flex flex-col items-center justify-center shadow-md text-center p-3">
          <Image
            src={data.image}
            alt={`${data.title} icon`}
            width={100}
            height={100}
            className="rounded-full mb-2 object-cover"
          />
          <h3 className="text-lg font-bold text-black">{data.title}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-[#087a7e] text-white rounded-xl flex-col items-center justify-center shadow-md text-[14px] p-4 [transform:rotateY(180deg)]">
           <h3 className="text-lg font-bold text-black text-center mb-3 text-white">{data.title}</h3>
          <ul className="text-left list-disc ml-4 space-y-1">
            {data.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};