import Image from "next/image";

export type ConsultantFeatureCardItem = {
  id?: string | number;
  icon: string;
  title: string;
  about: string;
};

export default function ConsultantFeatureCard({
  icon,
  title,
  about,
}: ConsultantFeatureCardItem) {
  return (
    <div className="group flex h-[420px] flex-col items-center rounded-lg bg-gray-100 p-6 text-center transition-all duration-300 hover:bg-[#00999E] sm:h-[440px]">
      <div className="mb-4 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white p-px shadow-2xl">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={78}
          height={78}
          className="h-[78px] w-[78px] object-contain"
        />
      </div>
      <h2 className="shrink-0 text-lg font-bold text-[#00999e] transition-all duration-300 group-hover:text-white sm:text-xl">
        {title}
      </h2>
      <div className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1">
        <p
          className="text-justify text-sm font-medium leading-relaxed text-gray-700 transition-all duration-300 group-hover:text-white sm:text-[15px]"
          dangerouslySetInnerHTML={{ __html: about }}
        />
      </div>
    </div>
  );
}

export function ConsultantFeatureCardGrid({
  items,
}: {
  items: ConsultantFeatureCardItem[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item, index) => (
        <ConsultantFeatureCard key={item.id ?? index} {...item} />
      ))}
    </div>
  );
}
