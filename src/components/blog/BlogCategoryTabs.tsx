import ContainerWrapper from "@/components/ContainerWrapper";

export default function BlogCategoryTabs({
  categories,
  activeCategory,
  onSelectCategory,
}: {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}) {
  return (
    <section className="border-b border-[#D8EEF1] bg-white py-5">
      <ContainerWrapper>
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                activeCategory === category
                  ? "border-[#00999E] bg-[#00999E] text-white"
                  : "border-[#CBECEF] bg-white text-slate-600 hover:border-[#00999E] hover:text-[#00999E]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
}

