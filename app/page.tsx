import Link from "next/link";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FaMapLocationDot } from "react-icons/fa6";

const Home = async () => {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const response = await client.getEntries({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE!,
    });
    const response2 = await client.getEntries({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE_TESTIMONY!,
    });

    const membership = response.items;
    const testimony = response2.items;

    return (
      <>
        <div className="flex flex-col items-center justify-center gap-20">
          <section className="flex items-center  flex-col-reverse sm:flex-row bg-[url('/boxing.jpeg')] h-full w-full bg-cover bg-center ">
            <div>
              <h1 className="text-7xl sm:text-8xl flex-col sm:flex-row font-bold text-white w-[100px] mb-auto mt-auto justify-center ">
                Martial Arts Schools
              </h1>
              <div className="flex gap-3 mt-10">
                <Link href="/services">
                  <button className="bg-orange-500 text-white p-3 rounded-lg cursor-pointer">
                    Our Service
                  </button>
                </Link>
                <Link href="/about">
                  <button className="bg-orange-500 text-white p-3 rounded-lg cursor-pointer">
                    About Us
                  </button>
                </Link>
              </div>
            </div>
          </section>
          <section className="sm:flex items-center gap-[450px]">
            <div className="sm:w-48 xs:mb-10 sm:mb-0">
              <iframe
                src="https://www.youtube.com/embed/gB1Ojw0Yl_o?autoplay=1&mute=1"
                name="youtube embed"
                allow="autoplay; encrypted-media"
                title="Youtube Player"
                className="h-[400px] w-[600px]"
              />
            </div>
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-3 ">
                We Are Best Martial Arts
              </h2>
              <p>
                A martial arts school is a specialized facility where
                individuals can learn and practice various martial arts
                disciplines. These schools offer a structured environment for
                training, self-improvement, and personal development through
                martial arts. Here's an overview of what you can typically
                expect from a martial arts school
              </p>
            </div>
          </section>
          <iframe
            className="w-full h-96"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&height=400&hl=en&q=Trikora%20papua+(Baku%20Hantam%20Scholl)&t=&z=12&ie=UTF8&iwloc=B&output=embed"
          ></iframe>{" "}
          <a href="https://www.google.com/maps/place/Trikora,+Distrik+Wamena,+Kabupaten+Jayawijaya,+Papua/@-4.3091057,138.5511045,11z/data=!3m1!4b1!4m6!3m5!1s0x683dd55447bf06c3:0x7e7d51bcf1ddb57c!8m2!3d-4.2950352!4d138.6990679!16s%2Fg%2F1hm2ps6j8?entry=ttu">
            <FaMapLocationDot />
            My Location
          </a>{" "}
          <section className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-10 text-white">Membership</h1>
            <div className="flex xs:flex-col sm:flex-row gap-10">
              {membership.map((item: any) => (
                <div
                  key={item.sys.id}
                  className="bg-orange-500 text-white text-center p-10 rounded-lg flex flex-col gap-5 max-w-56"
                >
                  <h3 className="text-xl">{item.fields.title}</h3>
                  <p className="text-sm">{item.fields.description}</p>
                  <p className="text-xl">Rp. {item.fields.price}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-10">Our Testimony</h1>
            <div className="flex xs:flex-col sm:flex-row gap-10">
              {testimony.map((item: any) => (
                <div
                  key={item.sys.id}
                  className="bg-orange-500 text-white text-center p-10 rounded-lg flex flex-col gap-5"
                >
                  <h3 className="text-xl">{item.fields.name}</h3>
                  <div className="text-sm italic">
                    {documentToReactComponents(item.fields.description)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
  }
};

export default Home;
