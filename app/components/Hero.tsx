"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

import {Button} from "./Button";
// [x]: add animation
export default function Hero() {

  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  // useEffect(() => {
  //   if (loadedVideos === totalVideos - 1) {
  //     setLoading(false);
  //   }
  // }, [loadedVideos]);

  // const handleMiniVdClick = () => {
  //   setHasClicked(true);

  //   setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  // };

  // useGSAP(
  //   () => {
  //     if (hasClicked) {
  //       gsap.set("#next-video", { visibility: "visible" });
  //       gsap.to("#next-video", {
  //         transformOrigin: "center center",
  //         scale: 1,
  //         width: "100%",
  //         height: "100%",
  //         duration: 1,
  //         ease: "power1.inOut",
  //         onStart: () => nextVdRef.current.play(),
  //       });
  //       gsap.from("#current-video", {
  //         transformOrigin: "center center",
  //         scale: 0,
  //         duration: 1.5,
  //         ease: "power1.inOut",
  //       });
  //     }
  //   },
  //   {
  //     dependencies: [currentIndex],
  //     revertOnUpdate: true,
  //   }
  // );

  useGSAP(() => {
    gsap.set("#hero-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#hero-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  // const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* [ ]: loading */}
      <div
        id="hero-frame"
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
