import Image from "next/image";

export default function Carousel() {
  return (
    <div className="carousel carousel-center  max-w-full space-x-4 p-4">
      <div className="karate-item">
        <Image
          src="/karate.jpeg"
          alt="karate"
          height={500}
          width={500}
          className="rounded-box"
        />
      </div>
      <div className="muay-thai-item">
        <Image
          src="/muay-thai.jpg"
          alt="muaythai"
          height={500}
          width={500}
          className="rounded-box"
        />
      </div>
      <div className="shaolin-item">
        <Image
          src="/shaolin.jpeg"
          alt="shaolin"
          height={500}
          width={500}
          className="rounded-box"
        />
      </div>
      <div className="taekwondo-item">
        <Image
          src="/taekwondo.jpg"
          alt="taekwondo"
          height={500}
          width={500}
          className="rounded-box"
        />
      </div>
      <div className="capoera-item">
        <Image
          src="/capoera.jpeg"
          alt="capoera"
          height={500}
          width={500}
          className="rounded-box"
        />
      </div>
      <div className="pencak-silat-item">
        <Image
          src="/Pencak-2.jpeg"
          alt="pencak-silat"
          height={500}
          width={500}
          className="rounded-box"
        />
      </div>
      <div className="jiu-jitsu-item">
        <Image
          src="/jiu-jitsu.jpg"
          alt="jiu-jitsu"
          height={500}
          width={500}
          className="rounded-box"
        />
      </div>
      <div className="taekwondo-2-item">
        <Image
          src="/taek-2.jpeg"
          alt="taekwondo-2"
          height={500}
          width={500}
          className="rounded-box"
        />
      </div>
    </div>
  );
}
