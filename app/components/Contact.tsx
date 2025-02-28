/**
 * Contact Section Component
 *
 * This component renders the "Contact" section with:
 * - An animated title (`AnimatedTitle`).
 * - A styled background container with clipped images (`ImageClipBox`).
 * - A call-to-action (`Button`) for user interaction.
 *
 * Features:
 * - Uses **Tailwind CSS for responsive design**.
 * - Implements **image clipping techniques**.
 * - Uses `flexbox` for layout and positioning.
 * - Supports **multi-device responsiveness** (`sm`, `md`, `lg` breakpoints).
 *
 * Tailwind CSS Classes Explained:
 * - `w-screen` → Ensures the section spans the full viewport width.
 * - `min-h-96` → Sets the minimum height to 96 units (384px).
 * - `px-10` → Adds horizontal padding for spacing.
 * - `relative` → Allows child elements to be positioned absolutely.
 * - `rounded-lg` → Adds rounded corners for a modern look.
 * - `bg-black text-blue-50` → Sets background color to black and text to light blue.
 * - `sm:overflow-hidden` → Hides overflowing content on small screens.
 * - `flex flex-col items-center text-center` → Centers elements vertically and aligns text.
 */

import AnimatedTitle from "./AnimatedTitle"; // Animated text effect
import { Button } from "./Button"; // Custom button component

// Define TypeScript props for ImageClipBox
interface ImageClipBoxProps {
  src: string; // Image source
  clipClass: string; // Tailwind classes for clipping effect
}

/**
 * ImageClipBox Component
 *
 * - Displays an image inside a styled container.
 * - Uses Tailwind classes passed via `clipClass` for positioning and effects.
 */
const ImageClipBox = ({ src, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} alt="Decorative" />
  </div>
);

/**
 * Contact Component
 *
 * - Displays a call-to-action section with images, a title, and a button.
 * - Uses absolute positioning and clipping for background images.
 */
export default function Contact() {
  return (
    /**
     * Contact Section Wrapper
     *
     * Tailwind CSS:
     * - `my-20` → Adds top and bottom margin (`5rem` or `80px`).
     * - `min-h-96` → Ensures minimum height of 96 units (384px).
     * - `w-screen` → Expands width to fill the viewport.
     * - `px-10` → Adds horizontal padding for spacing.
     */
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      
      {/**
       * Contact Section Container
       *
       * Tailwind CSS:
       * - `relative` → Allows absolute-positioned children inside.
       * - `rounded-lg` → Gives the section rounded corners.
       * - `bg-black text-blue-50` → Sets black background and light blue text.
       * - `py-24` → Adds vertical padding of `6rem` (96px).
       * - `sm:overflow-hidden` → Hides overflow content on `sm` screens.
       */}
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        
        {/** 
         * Left Side Clipped Images (Visible on `sm` and larger screens)
         *
         * Tailwind CSS:
         * - `absolute -left-20 top-0` → Positions the container 20 units left from the parent.
         * - `hidden sm:block` → Hides it on smaller screens (`sm` and below).
         * - `h-full w-72` → Sets full height and 72-unit width.
         * - `lg:left-20 lg:w-96` → Adjusts position and width on large (`lg`) screens.
         */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox src="/images/contact-1.webp" clipClass="contact-clip-path-1" />
          <ImageClipBox
            src="/images/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        {/** 
         * Right Side Clipped Images
         *
         * Tailwind CSS:
         * - `absolute -top-40 left-20 w-60` → Positions the image upwards and 60 units wide.
         * - `sm:top-1/2` → Moves the image to the middle on small screens.
         * - `md:left-auto md:right-10` → Positions it to the right on medium (`md`) screens.
         * - `lg:top-20 lg:w-80` → Moves it down and increases width on large screens.
         */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox src="/images/swordman-partial.webp" clipClass="absolute md:scale-125" />
          <ImageClipBox src="/images/swordman.webp" clipClass="sword-man-clip-path md:scale-125" />
        </div>

        {/** 
         * Contact Content (Centered)
         *
         * Tailwind CSS:
         * - `flex flex-col items-center text-center` → Centers elements vertically and horizontally.
         */}
        <div className="flex flex-col items-center text-center">
          
          {/** 
           * Small Heading
           *
           * Tailwind CSS:
           * - `mb-10` → Adds margin-bottom for spacing.
           * - `font-general text-[10px] uppercase` → Uses general font, `10px` text size, and uppercase letters.
           */}
          <p className="subtitle mb-5 uppercase">
            Join Zentry
          </p>

          {/** 
           * Animated Title Component
           *
           * - `containerClass` → Custom Tailwind classes for styling.
           */}
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          {/** 
           * Call-to-Action Button
           *
           * Tailwind CSS:
           * - `mt-10` → Adds top margin.
           * - `cursor-pointer` → Shows a pointer cursor on hover.
           * - `text-black bg-white` → Sets black text on a white background.
           */}
          <Button
            id="watch-trailer"
            title="Watch trailer"
            leftIcon=""
            rightIcon=""
            className="mt-10 cursor-pointer text-black bg-white"
            textSize="text-xl"
          />
        </div>
      </div>
    </div>
  );
}
