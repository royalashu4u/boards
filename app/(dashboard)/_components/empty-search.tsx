import Image from "next/image";


export const EmptySearch = () => {
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6 flex flex-col items-center justify-center">
      <Image
        src="/c4.png"
        alt="No results found"
        width={200}
        height={200}
      />
      <h2 className="text-2xl font-semibold mt-4">No results found</h2>
      <p className="text-gray-500 mt-2">
        Try adjusting your search or filter criteria.
      </p>
    </div>
  );
};