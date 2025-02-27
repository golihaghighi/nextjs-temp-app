/**
 * BentoCard Component
 *
 * This component renders a responsive card that displays an image or video,
 * a title, a description, and a hover button that appears when `isComingSoon` is true.
 *
 * Features:
 * - Supports image or video backgrounds.
 * - Implements a radial hover effect using `useState` for cursor tracking.
 * - Utilizes Tailwind CSS for styling.
 *
 * Tailwind CSS Classes Explained:
 * - `relative` → Positions this element relative to its normal position.
 * - `absolute left-0 top-0` → Places the image/video at the top-left corner.
 * - `size-full` → Ensures the element fills the full width and height of its parent.
 * - `object-cover` → Ensures the image/video covers the entire container without stretching.
 * - `text-blue-50` → Sets text color to a **light blue** (`#F0F9FF`).
 * - `flex flex-col justify-between` → Arranges elements in a column and spaces them evenly.
 * - `w-fit` → Makes the button fit its content.
 * - `cursor-pointer` → Indicates the button is interactive.
 * - `rounded-full` → Gives the button fully rounded edges.
 * - `opacity-0 transition duration-300` → Ensures smooth opacity changes on hover.
 */

"use client"; // Enables Client-side Rendering (CSR) in Next.js

import { useState, useRef } from "react"; // Import React hooks
import { TiLocationArrow } from "react-icons/ti"; // Import icon for the hover button

// Define the TypeScript props for the BentoCard component
interface BentoCardProps {
  src: string; // Image or video source URL
  title: React.ReactNode; // Card title (supports JSX elements)
  description: string; // Description text
  isComingSoon: boolean; // Determines whether the "Coming Soon" button is displayed
}

/**
 * BentoCard Component
 *
 * - Displays an image or video background.
 * - Renders a title and description.
 * - If `isComingSoon` is true, a hover button appears with a dynamic radial effect.
 */
export default function BentoCard({ src, title, description, isComingSoon }: BentoCardProps) {
  // State to track the cursor position within the button
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // State to control the hover effect opacity
  const [hoverOpacity, setHoverOpacity] = useState(0);

  // Reference for the hover button
  const hoverButtonRef = useRef<HTMLDivElement | null>(null);

  /**
   * Handles mouse movement over the button to create a radial gradient effect.
   */
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left, // Get X position relative to the button
      y: event.clientY - rect.top, // Get Y position relative to the button
    });
  };

  // Handle mouse enter to show the hover effect
  const handleMouseEnter = () => setHoverOpacity(1);

  // Handle mouse leave to hide the hover effect
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    /**
     * Outer container for the Bento Card.
     *
     * Tailwind CSS:
     * - `relative` → Allows absolutely positioned child elements to be positioned inside.
     * - `size-full` → Ensures it takes up the full width and height available.
     */
    <div className="relative size-full">
      
      {/* Background Image (or Video - uncomment video block if needed) */}
      <img
        src={src}
        alt="features"
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        
        {/* Title & Description */}
        <div>
          <h2 className="bento-title special-font ">{title}</h2>
          
          {/* Description (only rendered if it exists) */}
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {/* Conditional "Coming Soon" Button (Only displayed if `isComingSoon` is true) */}
        {isComingSoon && (
          /**
           * Button container with hover effect.
           *
           * Tailwind CSS:
           * - `relative` → Keeps the button positioned correctly.
           * - `flex w-fit items-center gap-1` → Centers icon & text inside the button.
           * - `cursor-pointer` → Indicates that the button is interactive.
           * - `overflow-hidden` → Ensures hover animation doesn't overflow.
           * - `rounded-full` → Makes the button fully rounded.
           * - `bg-black` → Sets the button background to black.
           * - `px-5 py-2` → Adds padding for a comfortable button size.
           * - `text-xs uppercase` → Sets text size to extra small and makes it uppercase.
           * - `text-white/20` → Lightens the text color to **20% opacity white**.
           */
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial Gradient Hover Effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity, // Controls opacity dynamically
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            
            {/* Location Arrow Icon */}
            <TiLocationArrow className="relative z-20" />
            
            {/* Button Text */}
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}
