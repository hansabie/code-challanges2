"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import ShareButton from "../components/share-button";

const About = () => {
  return (
    <>
      <div className=" inset-x-0 min-w-[100%] min-h-[100%] mt-0 mb-0 ">
        <video controlsList="nodownload" autoPlay muted loop id="myvideo">
          <source src="/boxing-vid.mp4" type="video/mp4" />
        </video>
      </div>
      <ShareButton
        text="Mau tanya tanya dulu dong min !"
        size={50}
        className="flex"
      />
      <div className=" font-Inter text-center flex flex-col justify-center items-center ">
        <span>Martial Arts By You</span>
        <h1 className="text-3xl font-light">What If You Were a Martial Art?</h1>
        <p>
          Let's discover the answer! Embrace your inner fighter by infusing your
          unique style into a martial art with Martial Arts By You, our
          co-creation service for Members. A bit more of this technique, a touch
          less of that stance—just enjoy customizing a martial art that
          resonates with who you are.
        </p>
      </div>
    </>
  );
};
export default About;

// <video width="400" height="600" autoPlay controls preload="none">
// <source src="/boxing-vid.mp4" type="video/mp4" />
// Your browser does not support the video tag.
// </video>
