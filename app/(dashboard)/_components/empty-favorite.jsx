import Image from "next/image";


export const EmptyFavorite = () => {
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6 flex flex-col items-center justify-center">
      <Image
        src="/c1.png"
        alt="No results found"
        width={200}
        height={200}
      />
      <h2 className="text-2xl font-semibold mt-4">No Favorite found</h2>
      <p className="text-gray-500 mt-2">
        Try adding some Favorite boards.
      </p>
    </div>
  );
};