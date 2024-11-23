import React from "react";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";

function UserNav() {
  return (
    <Link
      href={"/"}
      className="bg-[#000000B2]  w-8 h-8 lg:w-9 lg:h-9 rounded-full flex justify-center items-center cursor-pointer"
    >
      <div className="bg-[#AED4FC] w-5 h-5 lg:w-6 lg:h-6 rounded-full flex justify-center items-center ">
        <Avatar className="w-7 h-7" />
      </div>
    </Link>
  );
}

export default UserNav;
