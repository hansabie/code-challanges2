"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const home = () => {
  const [data, setData] = useState<any>([]);
  const [dataMembership, setDataMembership] = useState<any>([]);
  const [dataTestimony, setDataTestimony] = useState<any>([]);

  const fetchData = async () => {
    const headers = {
      Authorization: "Bearer flPnjtBrWPNIWfl5Fs_m_D8QBup1SUWPQhpaYoDfUHI",
    };
    const url = `https://cdn.contentful.com/spaces/6xzpw1n4lyqh/environments/master/entries?content_type=homeContent`;

    await axios
      .get(url, { headers })
      .then((response) => {
        setData(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchDataMembership = async () => {
    const headers = {
      Authorization: "Bearer flPnjtBrWPNIWfl5Fs_m_D8QBup1SUWPQhpaYoDfUHI",
    };
    const url = `https://cdn.contentful.com/spaces/6xzpw1n4lyqh/environments/master/entries?content_type=membershipContent`;

    await axios
      .get(url, { headers })
      .then((response) => {
        setDataMembership(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchDataTestimony = async () => {
    const headers = {
      Authorization: "Bearer flPnjtBrWPNIWfl5Fs_m_D8QBup1SUWPQhpaYoDfUHI",
    };
    const url = `https://cdn.contentful.com/spaces/6xzpw1n4lyqh/environments/master/entries?content_type=testimonyContent`;

    await axios
      .get(url, { headers })
      .then((response) => {
        setDataTestimony(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchDataMembership();
    fetchDataTestimony();
  }, []);

  console.log(data);
  console.log(dataMembership);
  console.log(dataTestimony);

  return (
    <div className="flex flex-col items-center justify-center gap-32">
      <section className="flex items-center  flex-col sm:flex-row">
        <div>
          <h1 className="xs:text-4xl sm:text-8xl font-bold">
            {data[1]?.fields?.title}
          </h1>
          <div className="flex gap-3 mt-10">
            <Link href="/services">
              <button className="bg-black text-white p-3 rounded-lg cursor-pointer">
                Our Service
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-black text-white p-3 rounded-lg cursor-pointer">
                About Us
              </button>
            </Link>
          </div>
        </div>
        <img
          className="xs:w-full xs:mt-10 sm:w-[50%] rounded"
          src={data[1]?.fields?.urlMedia}
          alt="image-banner"
        />
      </section>

      <section className="sm:flex items-center gap-[450px]">
        <div className="sm:w-48 xs:mb-10 sm:mb-0">
          <iframe
            className="xs:w-[340px] xs:h-[200px] sm:w-[560px] sm:h-[315px]"
            src={data[0]?.fields?.urlMedia}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-3">{data[0]?.fields?.title}</h2>
          <p>{data[0]?.fields?.descriptions}</p>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10">Membership</h1>
        <div className="flex xs:flex-col sm:flex-row gap-10">
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">{dataMembership[2]?.fields?.monthTitle}</h3>
            <p className="text-sm">{dataMembership[2]?.fields?.descriptions}</p>
            <p className="text-xl">{dataMembership[2]?.fields?.price}</p>
          </div>
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">{dataMembership[1]?.fields?.monthTitle}</h3>
            <p className="text-sm">{dataMembership[1]?.fields?.descriptions}</p>
            <p className="text-xl">{dataMembership[1]?.fields?.price}</p>
          </div>
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">{dataMembership[0]?.fields?.monthTitle}</h3>
            <p className="text-sm">{dataMembership[0]?.fields?.descriptions}</p>
            <p className="text-xl">{dataMembership[0]?.fields?.price}</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10">Our Testimony</h1>
        <div className="flex xs:flex-col sm:flex-row gap-10">
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">{dataTestimony[2]?.fields?.name}</h3>
            <p className="text-sm italic">
              {dataTestimony[2]?.fields?.descriptions}
            </p>
          </div>
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">{dataTestimony[1]?.fields?.name}</h3>
            <p className="text-sm italic">
              {dataTestimony[1]?.fields?.descriptions}
            </p>
          </div>
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">{dataTestimony[0]?.fields?.name}</h3>
            <p className="text-sm italic">
              {dataTestimony[0]?.fields?.descriptions}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
