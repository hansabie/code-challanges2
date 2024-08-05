"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const home = () => {
  const [listTeam, setListTeam] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=6");
      setListTeam(response.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="text-2xl font-bold text-center">Loading...</h1>;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-32">
        <section className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-10">Company History</h1>
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col items-center gap-5">
            <h3 className="text-xl font-bold">2023</h3>
            <p className="text-sm">Develop Team</p>

            <div className="border w-0 h-12" />

            <h3 className="text-xl font-bold">2024</h3>
            <p className="text-sm">Develop Company</p>

            <div className="border w-0 h-12" />

            <h3 className="text-xl font-bold">2024</h3>
            <p className="text-sm">Running Company</p>
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center gap-32 mt-20">
        <section className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-10">Our Teams</h1>
          <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-10">
            {listTeam.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5"
                >
                  <h3 className="text-xl font-bold">
                    {item.name.first} {item.name.last}
                  </h3>
                  <p className="text-sm">{item.email}</p>
                  <p className="text-sm">{item.phone}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center gap-32 mt-20">
        <section className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-10">Our Culture</h1>
          <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-10">
            <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
              <h3 className="text-xl font-bold">Work Hard</h3>
            </div>
            <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
              <h3 className="text-xl font-bold">Play Hard</h3>
            </div>
            <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
              <h3 className="text-xl font-bold">Responsibility</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
