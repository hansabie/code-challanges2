"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const About = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  bg-slate-100 rounded-tl-[25px] gap-3">
        <figure
          className=" h-full w-full mb-[-92px] rounded-tl-[25px] rounded-br-[25px] overflow-hidden max-h-[500px]
        "
        >
          <Image
            className="h-full w-full object-cover "
            src="https://images.ctfassets.net/kr4ift5uwyye/7s9MoxcF0K70zWMb9o77Nd/4c454e58e7d75b723b2151d0eae93db1/nathan-dumlao-W3szznQ8yl8-unsplash.jpg"
            alt="Judo"
            width={500}
            height={300}
          />
        </figure>
        <div className="card-body text-black mt-[100px] md:mt-[0px] pr-3 ">
          <h1 className="card-title font-bold text-4xl mb-7 pr-7">
            Buka dunia yang lebih seru
          </h1>
          <p>
            Selamat datang di Dunia Martial Art, tempat di mana seni, disiplin,
            dan kekuatan bertemu dalam harmoni. Kami adalah komunitas yang
            berdedikasi untuk mengajarkan dan mempraktikkan seni bela diri
            dengan semangat yang tinggi dan komitmen yang tak tergoyahkan.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2  bg-slate-100 rounded-tl-[25px] mt-12 gap-3">
        <figure
          className=" h-full w-full mb-[-92px] rounded-tl-[25px] rounded-br-[25px] overflow-hidden max-h-[500px]
       "
        >
          <Image
            className="h-full w-full object-cover object-top "
            src="https://www.eju.net/wp-content/uploads/2018/03/97e9882d23181feae2e14566db2e63aa.jpg"
            alt="Champions"
            width={500}
            height={300}
          />
        </figure>
        <div className="card-body text-black mt-[100px] md:mt-[0px] pr-3 ">
          <h1 className="card-title font-bold text-4xl mb-7 pr-7">Champions</h1>
          <p>
            Selamat datang di Dunia Martial Art, tempat di mana seni, disiplin,
            dan kekuatan bertemu dalam harmoni. Kami adalah komunitas yang
            berdedikasi untuk mengajarkan dan mempraktikkan seni bela diri
            dengan semangat yang tinggi dan komitmen yang tak tergoyahkan.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
