/**
 * Hero Section Component
 *
 * This component creates an interactive Hero section with:
 * - **GSAP animations** (`clipPath`, `scrollTrigger`).
 * - **Dynamic text & hover effects**.
 * - **Smooth video/image transitions**.
 * - **Tailwind CSS for responsiveness**.
 *
 * Tailwind CSS Classes Explained:
 * - `h-dvh w-screen` → Full viewport height & width.
 * - `overflow-hidden` → Prevents content overflow.
 * - `absolute-center` → Centers elements inside relative containers.
 * - `z-40` → Ensures correct stacking order.
 */

"use client"; // Enables Client-side Rendering (CSR) in Next.js

import gsap from "gsap"; // Import GSAP for animations
import { useGSAP } from "@gsap/react"; // React integration for GSAP
import { ScrollTrigger } from "gsap/all"; // Scroll-based animations
import { TiLocationArrow } from "react-icons/ti"; // Import icon
import { useRef, useState } from "react"; // Import React hooks

import { Button } from "./Button"; // Import custom button component

// Register GSAP plugin for ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // State to track video loading progress
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4; // Total number of videos
  const nextVdRef = useRef<HTMLVideoElement | null>(null); // Ref for next video element

  /**
   * Handles video load completion to track progress.
   */
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  /**
   * Initializes GSAP animations for the Hero section.
   */
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

  return (
    /**
     * Hero Section Wrapper
     *
     * Tailwind CSS:
     * - `relative h-dvh w-screen overflow-x-hidden` → Fullscreen section without horizontal scrolling.
     */
    <div className="relative h-dvh w-screen overflow-x-hidden">
      
      {/** 
       * Hero Background & Container
       *
       * Tailwind CSS:
       * - `relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-white` → 
       *   Full viewport height, white background, rounded corners.
       */}
      <div
        id="hero-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-white"
      >
        <div>
          {/** 
           * Clickable Mask Box 
           *
           * Tailwind CSS:
           * - `mask-clip-path absolute-center absolute z-50 size-64` → 
           *   Centers the element and sets it to `64px` square.
           * - `cursor-pointer overflow-hidden rounded-lg` → 
           *   Makes it interactive and gives rounded edges.
           */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"></div>
          
          <img
            src="/images/HeroHome.webp"
            alt="Futuristic digital cityscape with AI-driven marketing"
            className="absolute left-0 top-0 size-full object-cover object-center mix-blend-multiply"
          />
          <div className="mask-hero"></div>
          
        </div>

        {/** 
         * Main Hero Title (Large Text)
         *
         * Tailwind CSS:
         * - `special-font hero-heading absolute bottom-5 right-5 z-40 text-white` → 
         *   Places text at bottom-right with high stacking order.
         */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-white">
          G<b>A</b>MING
        </h1>

        {/** 
         * Text & Call-to-Action Section
         *
         * Tailwind CSS:
         * - `absolute left-0 top-0 z-40 size-full` → 
         *   Positions the content on top of the full section.
         */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            
            {/** Hero Heading */}
            <h1 className="special-font hero-heading text-white">
              <b>c</b>yber<b>s</b>et
            </h1>

            {/** 
             * Hero Description 
             *
             * Tailwind CSS:
             * - `mb-5 max-w-64 font-robert-regular text-white` → 
             *   Limits text width, applies custom font, and sets text to white.
             */}
            <p className="mb-5 max-w-64 font-robert-regular text-white">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            {/** 
             * Call-to-Action Button 
             *
             * Tailwind CSS:
             * - `text-black bg-persian-red flex-center gap-1` → 
             *   Red background, black text, flexbox centering, spacing.
             */}
             <div className="flex space-x-2">
            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              rightIcon=""
              className="text-white bg-persian-red-90 flex-center gap-1"
              textSize="text-xl"
            />
             <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              rightIcon=""
              className="text-black bg-white flex-center gap-1"
              textSize="text-xl"
            />
            </div>
          </div>
        </div>
      </div>

      {/** 
       * Duplicate Hero Title for Effect 
       *
       * Tailwind CSS:
       * - `special-font hero-heading absolute bottom-5 right-5 text-black` → 
       *   Second instance of the text in black for a layered effect.
       */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  );
}
