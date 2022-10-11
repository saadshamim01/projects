import React from "react";
import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div
      className="flex space-x-3 items-center  mb-2 relative
    hover:bg-gray-200 cursor-pointer p-2 rounded-xl"
    >
      <Image
        className="rounded-full"
        src={src}
        height={50}
        width={50}
        position="fixed"
      />
      <p className="font-medium ml-3">{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  );
}

export default Contact;
