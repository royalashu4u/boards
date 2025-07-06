"use client";
import Image from "next/image";
import { Hint } from "@/components/hint";

import {
    useOrganization,
    useOrganizationList
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

const isActive = organization?.id === id;
const onClick = () => {
    if (!setActive) return;
    setActive({organization: id});
}

    return(
        <div className="aspect-square relative w-[40px] h-[40px]">
           <Hint
                label={name}
                side="right"
                align="start"
                sideOffset={10}
                alignOffset={-1}
                >
             <Image fill src={imageUrl} alt={name} onClick={onClick}
                className={cn(
                    "rounded-md w-full cursor-pointer object-cover opacity-75 hover:opacity-100 transition",
                    isActive && "border-2 border-blue-500 opacity-100"
                )}
                />
           </Hint>
        </div>

    )
}