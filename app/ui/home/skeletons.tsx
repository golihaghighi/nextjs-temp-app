const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function HeroSkeleton() {
  return (
    <div className={`${shimmer} relative h-dvh w-screen overflow-x-hidden`}>
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

          
        </div>

        {/**
         * Main Hero Title (Large Text)
         *
         * Tailwind CSS:
         * - `special-font hero-heading absolute bottom-5 right-5 z-40 text-white` →
         *   Places text at bottom-right with high stacking order.
         */}
        

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
           

            {/**
             * Hero Description
             *
             * Tailwind CSS:
             * - `mb-5 max-w-64 font-robert-regular text-white` →
             *   Limits text width, applies custom font, and sets text to white.
             */}
           

            {/**
             * Call-to-Action Button
             *
             * Tailwind CSS:
             * - `text-black bg-persian-red flex-center gap-1` →
             *   Red background, black text, flexbox centering, spacing.
             */}
            <div className="flex space-x-2">
              
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
      
    </div>
  );
}

export default function HomeSkeleton() {
  return (
    <div className={`${shimmer} relative min-h-screen w-screen overflow-x-hidden`}>
      <HeroSkeleton />
    </div>
  );
}
