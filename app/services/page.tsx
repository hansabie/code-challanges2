import React from "react";
import Link from "next/link";

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-32">
      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10">Membership</h1>
        <div className="flex xs:flex-col sm:flex-row gap-10">
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">1 Months</h3>
            <p className="text-sm">You can join the training for 1 month</p>
            <p className="text-xl">Rp. 500.000</p>
          </div>
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">3 Months</h3>
            <p className="text-sm">You can join the training for 3 month</p>
            <p className="text-xl">Rp. 1.300.000</p>
          </div>
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">6 Months</h3>
            <p className="text-sm">You can join the training for 6 month</p>
            <p className="text-xl">Rp. 2.500.000</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10">Our Testimony</h1>
        <div className="flex xs:flex-col sm:flex-row gap-10">
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">Jamal.P - 1 Month Membership</h3>
            <p className="text-sm italic">
              "I joined the martial arts club for a one-month trial, and I've
              been thoroughly impressed with what I've experienced. Despite
              being new to martial arts, the instructors have been incredibly
              patient and supportive, guiding me through each technique
              step-by-step. In just one month, I've already noticed improvements
              in my flexibility and stamina. The structured classes not only
              challenge me physically but also mentally, enhancing my focus and
              discipline. This membership has been a great introduction to
              martial arts, and I'm seriously considering extending it."
            </p>
          </div>
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">Sulastri.S. - 3 Month Membership</h3>
            <p className="text-sm italic">
              "I opted for the three-month membership at the martial arts club,
              and it has exceeded my expectations. The training regimen is
              well-rounded, focusing on both self-defense techniques and overall
              fitness. I appreciate how the instructors tailor each session to
              accommodate different skill levels, ensuring everyone progresses
              at their own pace. The supportive atmosphere among fellow members
              has also been motivating. After three months, I feel more
              confident in my ability to defend myself and have noticed
              significant improvements in my strength and coordination. I'm
              excited to continue my journey here."
            </p>
          </div>
          <div className="bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5">
            <h3 className="text-xl">Jajang.P. - 6 Month Membership</h3>
            <p className="text-sm italic">
              "Signing up for the six-month membership at this martial arts club
              has been one of the best decisions I've made for my health and
              well-being. The longer commitment has allowed me to delve deeper
              into the techniques and philosophy behind martial arts. I've
              developed a stronger sense of discipline and mental resilience
              through regular practice. The club's community is tight-knit, and
              I've made friends who share my passion for martial arts.
              Physically, I've become more toned and agile, and mentally, I feel
              more prepared to face challenges in everyday life. This membership
              has truly transformed not just my fitness level, but my overall
              outlook."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
