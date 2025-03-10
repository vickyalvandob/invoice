import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CheckCircle, DownloadCloudIcon, Mail, MoreHorizontal, Pencil, Trash } from "lucide-react";
import Link from "next/link";

export function  InvoiceActions() {
    return (
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size="icon" className="cursor-pointer" variant="secondary">
                <MoreHorizontal className="size-4"/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="">
               <Pencil className="mr-1 size-4" /> Edit
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="">
               <DownloadCloudIcon className="mr-1 size-4" /> Download
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="">
               <Mail className="mr-1 size-4" /> Reminder 
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="">
               <Trash className="mr-1 size-4" /> Delete
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="">
               <CheckCircle className="mr-1 size-4" /> Mark as Paid
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
    );
}