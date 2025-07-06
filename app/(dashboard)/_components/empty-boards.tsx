"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";


export const EmptyBoards = () => {
const { organization } = useOrganization();
const { mutate, pending } = useApiMutation(api.board.create);
const onClick = () => {
  if (!organization) return;
  mutate({
    orgId: organization.id,
    title:"Untitled",
  })
  .then((id) => {
    toast.success("Board created successfully!");

    // TODO: Navigate to the newly created board
  })
  .catch((error) => {
    toast.error(`Failed to create board`);
  });
};

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6 flex flex-col items-center justify-center">
      <Image
        src="/Sketchbook.png"
        alt="No results found"
        width={200}
        height={200}
      />
      <h2 className="text-2xl font-semibold mt-4">No Board found</h2>
      <p className="text-gray-500 mt-2">
        Try creating your first board.
      </p>
      <Button disabled={pending} onClick={onClick} className="mt-4">
        Create Board
      </Button>
    </div>
  );
};