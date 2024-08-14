"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";

export default function ShareButton({
  text,
  size,
  className,
}: {
  text: string;
  size: number;
  className: string;
}) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const mediaList = [
    {
      icon: <FaSquareFacebook size={size} />,
      url: `https://www.facebook.com/sharer/sharer.php?quote=${text}`,
    },
    {
      icon: <FaSquareWhatsapp size={size} />,
      url: `https://api.whatsapp.com/send?text=${text}`,
    },
  ];

  if (!url)
    return (
      <div className={className}>
        <p className={`h-[${size}px] text-center`}>Loading share button...</p>
      </div>
    );

  return (
    <div className={className}>
      <ul className="flex justify-center gap-2">
        {mediaList.map((media, index) => (
          <li key={index}>
            <Link href={media.url} target="_blank">
              {media.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
