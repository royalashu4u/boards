"use client";
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogContent className="p-0 bg-transparent border-none">
        <OrganizationProfile  routing="hash"/>
      </DialogContent>
    </Dialog>
  );
};