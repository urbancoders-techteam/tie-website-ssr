import { useCountUp } from "@/hooks/useCountup";
import Image from "next/image";


interface Props {
  id: number;
  icon: string;
  count: number;
  parameter: string;
  title: string;
}

const MilestonesCard = ({ icon, count, parameter, title }: Props) => {
  const animatedCount = useCountUp(count, 2000); // 2 seconds

  return (
    <div className="flex flex-col h-80 mx-2 items-center justify-center p-2  hover:bg-[#5cd2d6] text-center cursor-pointer">
      <Image src={icon} alt={title} width={200} height={800} className="mb-4" />
      <h3 className="text-4xl font-bold ">
        {animatedCount}
        <span>{parameter}</span>
      </h3>
      <p className="text-md font-medium ">{title}</p>
    </div>
  );
};

export default MilestonesCard;
