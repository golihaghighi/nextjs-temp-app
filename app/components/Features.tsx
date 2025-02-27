/**
 * Features Section Component
 *
 * This component showcases various **Bento Cards** inside **Bento Tilt** elements.
 * It visually represents the different projects/products using an immersive design.
 *
 * Features:
 * - Uses **Next.js functional components**.
 * - Implements **flexbox and grid layout** for responsiveness.
 * - Uses **Tailwind CSS** for styling and layout.
 * - Integrates **BentoTilt** and **BentoCard** components for interactive UI.
 *
 * Tailwind CSS Classes Explained:
 * - `bg-black pb-52` → Sets black background and adds bottom padding.
 * - `container mx-auto px-3 md:px-10` → Centers the container and adds responsive padding.
 * - `grid grid-cols-2 grid-rows-3 gap-7` → Creates a **2-column, 3-row** grid with gaps.
 * - `rounded-md overflow-hidden` → Gives smooth rounded edges and hides overflow.
 * - `size-full object-cover` → Ensures images cover their container without distortion.
 */

import BentoCard from "./BentoCard"; // Bento-style content card
import BentoTilt from "./BentoTilt"; // Tilt effect wrapper
import { TiLocationArrow } from "react-icons/ti"; // Icon for more content

/**
 * Features Section Component
 *
 * - Displays different projects/products in an engaging layout.
 * - Uses BentoTilt and BentoCard to create a gamified UI.
 */
export default function Features() {
  return (
    /**
     * Features Section Wrapper
     *
     * Tailwind CSS:
     * - `bg-black` → Sets the background color to black.
     * - `pb-52` → Adds bottom padding (`52` units).
     */
    <section className="bg-black pb-52">
      
      {/**
       * Centered Container
       *
       * Tailwind CSS:
       * - `container` → Restricts max-width and centers content.
       * - `mx-auto` → Centers horizontally.
       * - `px-3 md:px-10` → Adds horizontal padding, increases at `md` breakpoint.
       */}
      <div className="container mx-auto px-3 md:px-10">
        
        {/** 
         * Section Title & Description
         *
         * Tailwind CSS:
         * - `px-5 py-32` → Adds **padding** (`5` units left/right, `32` units top/bottom).
         * - `font-circular-web text-lg text-blue-50` → Uses a circular font, sets text to light blue.
         * - `max-w-md opacity-50` → Limits width for readability and reduces text opacity.
         */}
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of products converge into an interconnected overlay experience on your world.
          </p>
        </div>

        {/** 
         * Large Feature Card (Spans Full Width)
         *
         * Tailwind CSS:
         * - `border-hsla relative mb-7` → Adds a border effect and margin at the bottom.
         * - `h-96 w-full` → Sets height and full width.
         * - `rounded-md overflow-hidden` → Rounds edges and hides overflow.
         * - `md:h-[65vh]` → Increases height on medium (`md`) screens.
         */}
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/images/gallery-1.webp"
            title={<> radia<b>n</b>t </>}
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon
          />
        </BentoTilt>

        {/**
         * Grid Container for Feature Cards
         *
         * Tailwind CSS:
         * - `grid` → Enables grid-based layout.
         * - `h-[135vh] w-full` → Sets grid height to **135% of viewport height**.
         * - `grid-cols-2 grid-rows-3` → Creates a **2-column, 3-row** grid.
         * - `gap-7` → Adds spacing between grid items.
         */}
        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">

          {/* Grid Items with BentoTilt & BentoCard */}
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/images/gallery-2.webp"
              title={<> zig<b>m</b>a </>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/images/gallery-3.webp"
              title={<> n<b>e</b>xus </>}
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/images/gallery-4.webp"
              title={<> az<b>u</b>l </>}
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </BentoTilt>

          {/** 
           * Coming Soon Card
           *
           * Tailwind CSS:
           * - `flex size-full flex-col justify-between` → Stacks elements in a column and distributes space.
           * - `bg-violet-300 p-5` → Sets background to **violet** and adds padding.
           * - `max-w-64 text-black` → Limits text width and sets text to black.
           */}
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          {/** 
           * Last Feature Card (Static Image)
           *
           * Tailwind CSS:
           * - `size-full object-cover` → Ensures the image covers its container.
           * - `object-center` → Centers the image within the container.
           */}
          <BentoTilt className="bento-tilt_2">
            <img
              src="/images/gallery-5.webp"
              className="size-full object-cover object-center"
              alt="features"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}
