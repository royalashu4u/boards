"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { Ghost, Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { ConfirmModal } from "./confirm-modal";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { useRenameModal } from "@/convex/store/use_rename_modal";




interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) => {
const {onOpen} = useRenameModal();



const {mutate, pending} = useApiMutation(api.board.remove)

const onDelete = () =>{
mutate({ id })
.then(() => toast.success("Board deleted"))
.catch(() => toast.error("Failed to Delete Board"))
}


  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Faild to copy link"));
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem onClick={onCopyLink} className="p-3 cursor-pointer">
          <Link2 className="h-4 w-4 mr-2" />
          Copy Board Link
        </DropdownMenuItem>

<DropdownMenuItem onClick={() =>{
    onOpen(id, title)
}} className="p-3 cursor-pointer">
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>

        <ConfirmModal
        header="Delete board?"
        description="This will delete the board and all of its contents."
        disabled={pending}
        onConfirm={onDelete}
        >

        <Button
        variant='ghost'
        className="p-3 text-sm w-full justify-start font-normal cursor-pointer">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
