
import OrganizationList from "./list";
import { NewButton } from "./new-button";

export default function Sidebar() {
  return (
   <aside className="fixed gap-4 z-1 top-0 left-0 w-[60px] bg-blue-900 h-full flex flex-col items-center p-4 text-white">
<OrganizationList/>
<NewButton />
  </aside>   

  );
}