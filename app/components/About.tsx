/**
 * About Section Component
 * 
 * This component renders the "About" section of the webpage, featuring:
 * - A title animation using GSAP (GreenSock Animation Platform).
 * - Scroll-triggered effects with `ScrollTrigger` for a dynamic experience.
 * - A responsive layout using Tailwind CSS for styling.
 *
 * Tailwind CSS Classes Explained:
 * - `min-h-screen` → Ensures the section is at least the height of the viewport.
 * - `w-screen` → Forces the section to take up the entire width of the screen.
 * - `relative` → Positions this element relative to its normal flow, allowing absolute children.
 * - `flex flex-col items-center` → Centers child elements in a vertical stack.
 * - `gap-5` → Adds spacing between flex children.
 * - `text-sm uppercase` → Sets text to small size and transforms it to uppercase.
 * - `md:text-[10px]` → Reduces text size to 10px on medium screens (`md` breakpoint).
 * - `h-dvh` → Sets height equal to **dynamic** viewport height (100vh).
 * - `absolute left-0 top-0` → Positions an element at the top-left corner of its parent.
 * - `size-full` → Sets `width: 100%` and `height: 100%`.
 * - `object-cover` → Ensures images fill their container while maintaining aspect ratio.
 */

"use client"; // Enables Client-side Rendering (CSR) in Next.js

import gsap from "gsap"; // Import GSAP for animations
import { useGSAP } from "@gsap/react"; // Hook for GSAP animations in React
import { ScrollTrigger } from "gsap/all"; // Import ScrollTrigger for scroll-based animations

import AnimatedTitle from "./AnimatedTitle"; // Custom animated title component

// Register GSAP plugin for scroll animations
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  /**
   * useGSAP Hook - Handles scroll-triggered animation for the About section.
   *
   * This animation expands the `.mask-clip-path` element when the user scrolls.
   */
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip", // The element that triggers the animation
        start: "center center", // Starts when the trigger is at the center of the viewport
        end: "+=800 center", // Ends 800px below the starting point
        scrub: 0.5, // Smoothly animates as the user scrolls
        pin: true, // Keeps the section pinned while scrolling
        pinSpacing: true, // Adds space below to prevent layout shift
      },
    });

    // Expands the masked image to cover the full viewport
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0, // Removes any border radius to make it full-screen
    });
  });

  return (
    /**
     * Main wrapper for the About section.
     * 
     * Tailwind CSS Classes:
     * - `min-h-screen` → Ensures the section fills at least the viewport height.
     * - `w-screen` → Makes the section span the full width of the screen.
     */
    <div id="about" className="min-h-screen w-screen">
      
      {/* Section content container */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        {/**
         * Subheading text
         *
         * Tailwind CSS:
         * - `font-general` → Applies a custom font (defined in Tailwind config).
         * - `text-sm` → Small text size.
         * - `uppercase` → Transforms text to uppercase.
         * - `md:text-[10px]` → Reduces text size to 10px on medium screens (`md` breakpoint).
         */}
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        {/**
         * Animated Title Component
         *
         * - `mt-5` → Adds top margin for spacing.
         * - `!text-black` → Forces text color to black.
         * - `text-center` → Centers text horizontally.
         */}
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        {/**
         * About Section Description
         *
         * - `.about-subtext` → A custom CSS class for additional styling.
         */}
        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          
          {/**
           * Secondary description
           *
           * - `text-gray-500` → Makes the text light gray for better contrast.
           */}
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy.
          </p>
        </div>
      </div>

      {/**
       * Scroll-triggered animation container
       *
       * - `h-dvh` → Dynamic viewport height (100vh).
       * - `w-screen` → Full width of the screen.
       */}
      <div className="h-dvh w-screen" id="clip">
        {/**
         * Animated image container
         *
         * - `.mask-clip-path` → Class targeted by GSAP animation.
         * - `.about-image` → Custom class for additional styles.
         */}
        <div className="mask-clip-path about-image">
          {/**
           * Background Image
           *
           * - `absolute left-0 top-0` → Positions image at the top-left corner.
           * - `size-full` → Ensures the image fills its container.
           * - `object-cover` → Ensures the image maintains aspect ratio while covering the container.
           */}
          <img
            src="/images/entrance.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
