/**
 * FloatingImage Component
 *
 * This component features:
 * - A **floating image effect** using GSAP.
 * - An **animated title** created with the `AnimatedTitle` component.
 * - A **call-to-action button** (`Button` component).
 * - A **smooth 3D tilt effect** triggered by mouse movement.
 *
 * Features:
 * - Uses **GSAP for animations** (rotateX, rotateY).
 * - Implements **Tailwind CSS** for responsive styling.
 * - Uses `useRef` to manage image transformations dynamically.
 *
 * Tailwind CSS Classes Explained:
 * - `min-h-dvh w-screen bg-black text-blue-50` → Ensures full viewport height, black background, and light blue text.
 * - `flex size-full flex-col items-center` → Aligns children in a vertical stack, centered.
 * - `relative size-full` → Allows absolute positioning of child elements.
 * - `pointer-events-none mix-blend-difference` → Prevents interaction and applies a color blending effect.
 * - `object-contain` → Ensures images scale properly within their container.
 */

"use client"; // Enables Client-side Rendering (CSR) in Next.js

import gsap from "gsap"; // Import GSAP for animations
import { useRef } from "react"; // Import React hooks

import { Button } from "./Button"; // Custom button component
import AnimatedTitle from "./AnimatedTitle"; // Animated text effect component

export default function FloatingImage() {
  // Reference for the floating image effect
  const frameRef = useRef<HTMLImageElement | null>(null);

  /**
   * Handles mouse movement over the image to create a tilt effect.
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e - The mouse event.
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    // Get the bounding box of the image element
    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate the rotation angles based on mouse position
    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    // Apply GSAP animation
    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  /**
   * Resets the tilt effect when the mouse leaves the image.
   */
  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    /**
     * Main Wrapper
     *
     * Tailwind CSS:
     * - `min-h-dvh` → Ensures section spans full viewport height.
     * - `w-screen` → Makes the section take up the full width of the screen.
     * - `bg-black text-blue-50` → Black background with light blue text.
     */
    <div id="story" className="min-h-dvh w-screen bg-black text-white">
      
      {/**
       * Section Content Wrapper
       *
       * Tailwind CSS:
       * - `flex size-full flex-col items-center` → Centers content vertically and horizontally.
       * - `py-10 pb-24` → Adds top and bottom padding.
       */}
      <div className="flex size-full flex-col items-center py-10 pb-24">
        
        {/**
         * Small Title
         *
         * Tailwind CSS:
         * - `font-general text-sm uppercase` → Uses general font, small text size, and uppercase letters.
         * - `md:text-[10px]` → On medium screens, reduces text size to `10px`.
         */}
        <p className="subtitle uppercase">
          the multiversal ip world
        </p>

        {/** 
         * Animated Title 
         *
         * Tailwind CSS:
         * - `relative size-full` → Ensures the title takes up full available space.
         * - `pointer-events-none mix-blend-difference` → Prevents interaction and applies a color blending effect.
         */}
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 text-persian-red-40"
          />

          {/** 
           * Image Container with Tilt Effect
           * 
           * Tailwind CSS:
           * - `story-img-container` → Custom styles for the image.
           */}
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/images/entrance.webp"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>

            {/* SVG Filter for Rounded Corners */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/**
         * Description and Call-to-Action Button
         *
         * Tailwind CSS:
         * - `-mt-80 flex w-full justify-center` → Moves content upwards and centers it.
         * - `md:-mt-64 md:me-44 md:justify-end` → Adjusts position on medium (`md`) screens.
         */}
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          
          {/**
           * Text & Button Container
           *
           * Tailwind CSS:
           * - `flex h-full w-fit flex-col items-center` → Centers text and stacks items vertically.
           * - `md:items-start` → Aligns items to the start on medium screens.
           */}
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            
            {/**
             * Description Text
             *
             * Tailwind CSS:
             * - `mt-3 max-w-sm text-center font-circular-web text-violet-50` → Limits width, centers text, and uses violet color.
             * - `md:text-start` → Aligns text to the left on medium screens.
             */}
            <p className="mt-3 max-w-sm text-center font-circular-web text-white md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite opportunities.
            </p>

            {/** Call-to-Action Button */}
            <Button
              id="realm-btn"
              title="discover prologue"
              leftIcon=""
              rightIcon=""
              textSize="text-xl"
              className="mt-5 bg-white text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
