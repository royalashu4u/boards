"use client";
import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";
export default function OrganizationList() {
    const {userMemberships} = useOrganizationList({
        userMemberships:{
            infinite : true,
        }
    }
  );
 if(!userMemberships.data?.length){
return null;
 }

  return(
<ul className="space-y-4">
{userMemberships.data.map((membership) => (
    <li key={membership.organization.id} className="text white">
       <Item key={membership.organization.id} id={membership.organization.id}
        name={membership.organization.name} imageUrl={membership.organization.imageUrl} />
    </li>
  ))}
</ul>

  );
}