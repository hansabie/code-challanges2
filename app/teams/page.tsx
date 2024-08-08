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
          <h1 className="text-4xl font-bold mb-10">Our Teams</h1>
          <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-10">
            {listTeam.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-orange-600 text-white text-center p-10 rounded-lg flex flex-col gap-5"
                >
                  <h3 className="text-xl font-bold">
                    {item.name.first} {item.name.last}
                  </h3>
                  <p className="text-sm break-words">{item.email}</p>
                  <p className="text-sm">{item.phone}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
