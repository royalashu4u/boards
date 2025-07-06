"use client";
import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
const {mutate, pending}= useApiMutation (api.board.create)

  return (
    <button
      disabled={pending || disabled}
      onClick={() => {
        mutate({
            orgId,
            title:"untitled"
        })
        .then((id)=>{
toast.success("Board Created");

//TODO: Redirect to /board/{id}
        })
        .catch(()=> toast.error("Failed to create board"))
      }}
      className={cn("col-span-1 aspect-[100/127] bg-blue-400 rounded-lg hover:bg-blue-500 flex flex-col cursor-pointer items-center justify-center py-6", (pending || disabled) && "opacity-75 bg-blue-300 cursor-not-allowed")}
    >
      <div />
      <Plus  className="h-12 w-12 text-white stroke-1"/>
      <p className="text-sm text-white font-light">
        New Board
      </p>
    </button>

  );
};
