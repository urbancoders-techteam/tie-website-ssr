type DubaiTableProps = {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  minWidth?: number;
  centerColumns?: readonly number[];
  labelWidthClass?: string;
  className?: string;
};

export default function DubaiTable({
  headers,
  rows,
  minWidth,
  centerColumns = [],
  labelWidthClass,
  className = "overflow-x-auto",
}: DubaiTableProps) {
  return (
    <div className={`${className} rounded-2xl border-2 border-[#C6A35A]`}>
      <table
        className="w-full border-collapse text-left text-sm shadow-[0_18px_40px_-30px_rgba(18,32,51,0.55)]"
        style={minWidth ? { minWidth } : undefined}
      >
        <thead>
          <tr className="bg-[#122033] text-[#E8D5A3]">
            {headers.map((header, index) => (
              <th
                key={header}
                className={`border border-[#24344A] px-3 py-3 text-center font-bold ${
                  index === 0 && labelWidthClass ? labelWidthClass : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row[0]} className={`align-top transition-colors duration-200 hover:bg-[#F7F1E6] ${rowIndex % 2 === 1 ? "bg-[#FBF8F3]" : "bg-white"}`}>
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  className={`border border-[#E6D9C4] px-3 py-3 leading-6 ${
                    index === 0 ? "font-semibold text-[#122033]" : "text-[#3E4A5A]"
                  } ${centerColumns.includes(index) ? "whitespace-nowrap text-center" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
