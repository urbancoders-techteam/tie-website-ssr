// components/WhyChooseUs.tsx


import HeadingTypography from "@/components/Heading";
import { whyChooseUsData } from "@/constants/test";
import FlipCard from "../Flipcard";
import SliderWrapper from "../slider/SliderWrapper";
import ContainerWrapper from "../ContainerWrapper";

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const WhyChooseUs = () => {
  return (
    <section className="bg-[#effdff] py-12">
     <ContainerWrapper>
        <div className="text-center mb-8">
          <HeadingTypography content="Why Choose Us" textAlign="center" />
        </div>

        <SliderWrapper settings={settings}>
          {whyChooseUsData.map((item, index) => (
            <div key={index} className="flex justify-center my-6">
              <FlipCard
                data={{
                  title: item?.title,
                  content: item?.content,
                  image: item?.image,
                }}
                fontSize="text-sm"
                titlefontsize="text-sm"
                padding="p-5"
                pb="pb-2"
                isFlip={false}
              />
            </div>
          ))}
        </SliderWrapper>
      </ContainerWrapper>
    </section>
  );
};

export default WhyChooseUs;
