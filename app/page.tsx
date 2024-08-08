import Link from "next/link";
import Image from "next/image";
import Carousel from "./components/carousel";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-32">
      <section className="flex items-center  flex-col sm:flex-row bg-[url('/boxing.jpeg')] h-full w-full bg-cover bg-center ">
        <div>
          <h1 className="xs:text-4xl sm:text-8xl font-bold text-white">
            Matrial Arts School
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
        <div className="h-[500px] w-[500px]">
          <Image
            className="w-full h-full rounded object-cover"
            src="https://images.unsplash.com/photo-1514050566906-8d077bae7046?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            alt="image-banner"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="sm:flex items-center gap-[450px]">
        <div className="sm:w-48 xs:mb-10 sm:mb-0">
          <iframe
            src="https://www.youtube.com/embed/gB1Ojw0Yl_o"
            title="Youtube Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="h-[400px]  w-[600px]"
          />
        </div>
        <div className="text-white">
          {/* <h2 className="text-4xl font-bold mb-3">{data[0]?.fields?.title}</h2> */}
          <h2 className="text-4xl font-bold mb-3 ">We Are Best Martial Arts</h2>
          <p>
            A martial arts school is a specialized facility where individuals
            can learn and practice various martial arts disciplines. These
            schools offer a structured environment for training,
            self-improvement, and personal development through martial arts.
            Here's an overview of what you can typically expect from a martial
            arts school
          </p>
        </div>
      </section>

      <section>
        <Carousel />
      </section>

      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10 text-white">Membership</h1>
        <div className="flex xs:flex-col sm:flex-row gap-10">
          <div className="bg-orange-500 text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">1 Months</h3>
            <p className="text-sm">You can join the training for 1 month</p>
            <p className="text-xl">Rp. 500.000</p>
          </div>
          <div className="bg-orange-500 text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">3 Months</h3>
            <p className="text-sm">You can join the training for 3 month</p>
            <p className="text-xl">Rp. 1.300.000</p>
          </div>
          <div className="bg-orange-500 text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">6 Months</h3>
            <p className="text-sm">You can join the training for 6 month</p>
            <p className="text-xl">Rp. 2.500.000</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10">Our Testimony</h1>
        <div className="flex xs:flex-col sm:flex-row gap-10">
          <div className="bg-orange-500 text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">Mas Gondrong</h3>
            <p className="text-sm italic">
              "Learning martial arts transformed how I feel walking alone at
              night. Now, I'm more aware and confident, knowing I have the
              skills to protect myself if needed. It's empowering!"
            </p>
          </div>
          <div className="bg-orange-500 text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">Yayat Bengkel</h3>
            <p className="text-sm italic">
              As a father, my priority is keeping my family safe. Martial arts
              training has given me the peace of mind that I can handle
              unexpected situations with calm and control. It's not just about
              physical strength; it's about mental readiness."
            </p>
          </div>
          <div className="bg-orange-500 text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">Fanny Jungler</h3>
            <p className="text-sm italic">
              "I used to feel anxious in crowded places, but martial arts taught
              me to trust my instincts and stay alert. It's amazing how much
              more confident I am now, knowing I have the ability to defend
              myself if necessary."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
