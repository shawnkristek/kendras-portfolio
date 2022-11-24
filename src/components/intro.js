import Image from "next/image";
import Link from "next/link";

import Button from "components/button";

import { AppConfig } from "utils/AppConfig";

import Kendra from "../../public/images/kendra-wright.jpg";

export default function Intro() {
  return (
    <div className="w-full flex flex-col justify-center gap-10 xl:gap-20 pt-5 lg:pt-10 xl:flex-row">
      <div className="flex justify-center">
        <Image
          alt="Kendra Wright UX Designer"
          priority
          src={Kendra}
          className="lg:max-w-lg lg:h-auto lg:rounded-2xl lg:flex p-1 ring-2 ring-[#835f02] object-cover rounded-full h-56 w-56 lg:h-46 lg:w-46 lg:w-full avatar"
        />
      </div>
      <div className="text-center flex flex-col justify-center mx-7">
        <h1 className="brown-sugar gold mb-10">{AppConfig.fullName}</h1>
        <p className="max-w-sm mx-auto lg:max-w-lg">
          Hey, I’m {AppConfig.firstName}! I’m a UX Designer in Salt Lake City. I’ve always been creative and a problem
          solver, but also data driven and analytical. I love that UX allows me to put all of these skills and passions
          to use. I also have a deep drive to help others and spent many years in customer support roles empathizing
          with my users. I have experience in many different industries, including e-commerce, real estate, health &
          fitness, food service, and beauty & wellness.
          <br />
          <br />
          Some of the things I love are nature <span role="img" aria-label="tree"> 🌳 </span> , fantasy books <span role="img" aria-label="elf"> 🧝‍♀️ </span> , my cats <span role="img" aria-label="cats"> 🐈 </span> , cool tattoos <span role="img" aria-label="skull"> 💀 </span> , baking <span role="img" aria-label="cupcake"> 🧁 </span> , iced coffee <span role="img" aria-label="coffee"> ☕ </span> , and martial arts <span role="img" aria-label="karate"> 🥋 </span> .
          <br />
          <br />
        </p>
        <Link href="/case-studies">
          <Button text="Check out my work" />
        </Link>
      </div>
    </div>
  );
}
