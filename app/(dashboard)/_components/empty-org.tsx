

import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle} from "@/components/ui/dialog"; 
 
export function EmptyOrg() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
    <Image
        src="/wel.png"
        alt="Dashboard Illustration"
        width={400}
        height={300}
        className="mb-6"
      />
      <h1 className="text-2xl font-bold mb-4">Welcome to YTSchool Board</h1>
      <p className="text-lg">Create an organization to get started.</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4">Create Organization</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle className="hidden">Create Your Organization</DialogTitle>
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
}