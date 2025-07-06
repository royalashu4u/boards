"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={10}
            alignOffset={-1}
          >
            <button className="p-2 bg-white/25 h-full w-full flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity rounded-md">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogContent className="p-0 border-none">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
