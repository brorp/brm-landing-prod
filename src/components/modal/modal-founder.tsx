import { XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Leader } from "@/app/our-story/page";

type ModalFounderProps = {
  children: React.ReactNode;
  data: Leader;
};

export default function ModalFounder({ children, data }: ModalFounderProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        showCloseIcon={false}
        className="flex border-none text-white  lg:w-[900px] max-w-none shadow-none ~sm/lg:~p-6/10 xl:p-0"
        overlayClass="bg-[#0B1936] bg-opacity-90 backdrop-blur"
      >
        <div className="flex flex-col justify-center items-center md:flex-row w-full gap-12 md:items-start">
          <div className="~sm/xl:~text-sm/lg w-4/6 md:w-full md:hidden block">
            <DialogClose className="float-right">
              <XIcon />
            </DialogClose>
          </div>
          <div className="relative w-[167px] h-[184px] ">
            <Image
              alt="leader image"
              src={data.img}
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between items-center md:items-start md:w-[600px] h-full text-center gap-2 md:text-left">
            <h1 className="heading-3">{data.name}</h1>
            <span className="link">{data.position}</span>
            <p className="font-noto ~sm/xl:~text-sm/lg w-4/6 md:w-full">
              {data.desc}
            </p>
          </div>
          <DialogClose className="hidden md:block">
            <XIcon />
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
