"use client";
import { BoardList } from "./_components/board-list";
import { EmptyOrg } from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";


const DashboardPage = () => {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();

  // Get values from the URL
  const search = searchParams.get("search") || undefined;
  const favorites = searchParams.get("favorites") || undefined;

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6 flex flex-col items-center justify-center">
      {/* {JSON.stringify({ search, favorites })} */}

      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList
          orgId={organization.id}
          query={{ search, favorites }}
        />
      )}
    </div>
  );
};

export default DashboardPage;