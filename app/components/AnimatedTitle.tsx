/**
 * Animated Title Component
 *
 * This component renders an animated title with GSAP (GreenSock Animation Platform).
 * It animates each word of the title with a staggered effect when the section enters the viewport.
 * 
 * Features:
 * - Uses GSAP for smooth animations.
 * - Implements ScrollTrigger to trigger animations based on scroll position.
 * - Uses Tailwind CSS for responsive styling.
 * - Supports multi-line titles with `<br />` for better formatting.
 *
 * Tailwind CSS Classes Explained:
 * - `flex-center` → Custom utility (likely `flex justify-center items-center`).
 * - `max-w-full` → Ensures the text container does not exceed the full width.
 * - `flex-wrap` → Allows words to wrap onto new lines instead of overflowing.
 * - `gap-2` → Adds a small gap (`0.5rem`) between words.
 * - `px-10` → Adds `2.5rem` (40px) of padding on the left and right.
 * - `md:gap-3` → On medium (`md`) screens, increases gap size to `0.75rem` (12px).
 */

"use client"; // Enables Client-side Rendering (CSR) in Next.js

import { gsap } from "gsap"; // Import GSAP for animations
import { useEffect, useRef } from "react"; // Import React hooks
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger for scroll-based animations
import clsx from "clsx"; // Utility for conditional class names

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define TypeScript props for AnimatedTitle component
interface AnimTitleProps  {
  title: string; // The text content of the animated title
  containerClass: string; // Additional CSS classes for customization
}

/**
 * AnimatedTitle Component
 *
 * - Uses GSAP to animate words as they appear in the viewport.
 * - Splits the title into individual words and animates them sequentially.
 * - Supports `<br />` in the title to create multi-line text animations.
 */
export default function AnimatedTitle({ title, containerClass="text-white" }: AnimTitleProps) {
  // Ref to track the title container for GSAP animation
  const containerRef = useRef<HTMLDivElement | null>(null);

  // useEffect Hook for triggering animations on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      /**
       * GSAP Timeline Animation:
       * - Triggers when the title enters the viewport.
       * - Words transition from hidden (`opacity: 0`) to visible with staggered animation.
       */
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // The animation starts when this element enters the viewport
          start: "100 bottom", // Starts when the bottom of the viewport is at 100px
          end: "center bottom", // Ends when the title reaches the center of the viewport
          toggleActions: "play none none reverse", // Play on enter, reverse on exit
        },
      });

      // Animate each `.animated-word` element with a smooth fade-in and transform effect
      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1, // Makes the text fully visible
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)", // Removes any initial transformation
          ease: "power2.inOut", // Smooth easing function
          stagger: 0.02, // Staggers animation to create a wave-like effect
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup function to remove GSAP animations on component unmount
  }, []);

  return (
    /**
     * Title container with dynamic class names using `clsx`
     *
     * Tailwind CSS Classes:
     * - `animated-title` → Likely a custom CSS class for additional animations.
     * - `containerClass` → Allows passing additional custom classes.
     */
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {/**
       * Splitting the `title` prop by `<br />` to create multi-line text.
       * Each line is wrapped inside a `div`.
       */}
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {/**
           * Splitting each line into words, and wrapping each word in a `span`
           * - `dangerouslySetInnerHTML` allows using `<b>` inside the title.
           */}
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
