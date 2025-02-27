"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import {Button} from "./Button";

export default function Hero() {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* [ ]: loading */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-white"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          
          </div>
          <img src="/images/entrance.webp" alt="logo" className="absolute left-0 top-0 size-full object-cover object-center"  />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-white">
          G<b>A</b>MING
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-white">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-white">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              rightIcon=""
              className="text-black bg-persian-red flex-center gap-1"
              textSize="text-xl"
              
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
}
{
  /* <img src="/images/entrance.webp" alt="logo"  /> */
}
