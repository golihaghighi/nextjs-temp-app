/**
 * BentoTilt Component
 *
 * This component adds an interactive tilt effect to its children.
 * It changes the 3D perspective based on mouse movement.
 *
 * Features:
 * - Uses `useState` to update the transform style dynamically.
 * - Uses `useRef` to reference the element for calculations.
 * - Implements `onMouseMove` to calculate tilt effects.
 * - Utilizes Tailwind CSS for styling.
 *
 * Tailwind CSS Classes Explained:
 * - `relative` → Ensures child elements can be positioned relatively inside.
 * - `transition-transform` → Enables smooth transform animations.
 * - `duration-300` → Sets the transform animation duration to 300ms.
 * - `ease-out` → Applies an easing function to make the movement smoother.
 */

"use client"; // Enables Client-side Rendering (CSR) in Next.js

import { useState, useRef } from "react"; // Import React hooks

// Define TypeScript props for the BentoTilt component
interface BentoTiltProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode; // Content inside the tilted element
  className?: string; // Allows passing additional custom classes
}

/**
 * BentoTilt Component
 *
 * - Applies a 3D tilt effect to the container based on cursor movement.
 * - Uses `perspective` and `rotateX/rotateY` to achieve depth.
 */
export default function BentoTilt({ children, className = "" }: BentoTiltProps) {
  // State to store the computed transform style
  const [transformStyle, setTransformStyle] = useState("");

  // Reference to track the container element
  const itemRef = useRef<HTMLDivElement | null>(null);

  /**
   * Handles mouse movement to calculate tilt effect.
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event - The mouse event.
   */
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!itemRef.current) return; // Prevents errors if the ref is null

    // Get the bounding box of the element
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    // Calculate the mouse position relative to the element
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    // Convert to tilt angles
    const tiltX = (relativeY - 0.5) * 10; // Adjust tilt intensity
    const tiltY = (relativeX - 0.5) * -10;

    // Create the 3D transform effect
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };

  /**
   * Resets the tilt effect when the mouse leaves the element.
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event - The mouse event.
   */
  const handleMouseLeave = () => {
    setTransformStyle(""); // Reset the transform
  };

  return (
    /**
     * Tiltable container element.
     *
     * Tailwind CSS:
     * - `relative` → Keeps the container positioned correctly for absolute elements inside.
     * - `transition-transform` → Ensures smooth transitions for the tilt effect.
     * - `duration-300` → Sets animation duration to 300ms.
     * - `ease-out` → Applies a smooth easing effect.
     */
    <div
      ref={itemRef}
      className={`relative transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
}
