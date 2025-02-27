/**
 * Button Component
 *
 * This component renders a customizable button with:
 * - Support for **left and right icons**.
 * - Dynamic **text size** control.
 * - A **hover animation** using Tailwind CSS.
 * - Custom class support via `clsx`.
 *
 * Features:
 * - Uses `group` for hover animations.
 * - Implements `overflow-hidden` to allow smooth text sliding effects.
 * - Uses `relative` and `absolute` positioning for animations.
 *
 * Tailwind CSS Classes Explained:
 * - `group` → Allows styling child elements when the parent is hovered.
 * - `relative` → Keeps elements inside positioned relative to this container.
 * - `absolute` → Positions the second title for animation.
 * - `overflow-hidden` → Ensures the text transition remains within the button bounds.
 * - `rounded-full` → Gives the button fully rounded edges.
 * - `cursor-pointer` → Ensures the button displays a pointer on hover.
 * - `transition duration-500` → Adds smooth animations over 500ms.
 */

import clsx from "clsx"; // Utility for handling conditional class names

// Define TypeScript props for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rightIcon?: React.ReactNode; // Optional right icon (e.g., arrow icon)
  leftIcon?: React.ReactNode; // Optional left icon (e.g., back icon)
  textSize?: string; // Allows customizing text size
}

/**
 * Button Component
 *
 * - Supports dynamic text size via `textSize` prop.
 * - Includes left & right icons for better UI experience.
 * - Uses Tailwind's `group-hover` for a **cool text animation effect**.
 */
export function Button({
  id,
  title,
  rightIcon = "",
  leftIcon = "",
  className = "",
  textSize = "text-xl", // Default text size (adjustable)
  ...rest
}: ButtonProps) {
  return (
    /**
     * Button Container
     *
     * Tailwind CSS:
     * - `group` → Enables hover effects for child elements.
     * - `relative` → Keeps icons & animations positioned correctly.
     * - `z-10` → Ensures the button is above other elements.
     * - `w-fit` → Button width fits the content inside.
     * - `cursor-pointer` → Changes cursor to pointer for better UX.
     * - `overflow-hidden` → Prevents text from overflowing during animation.
     * - `rounded-full` → Gives the button rounded edges.
     * - `px-7 py-3` → Adds padding (`px` for left/right, `py` for top/bottom).
     */
    <button
      {...rest}
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3",
        className
      )}
    >
      {/* Left Icon (if provided) */}
      {leftIcon}

      {/**
       * Text Container (Animated)
       *
       * Tailwind CSS:
       * - `relative` → Ensures text animations stay inside button.
       * - `inline-flex` → Ensures text stays on one line.
       * - `overflow-hidden` → Prevents overflow during animation.
       * - `font-general` → Applies the general font.
       * - `uppercase` → Transforms text to uppercase.
       * - `textSize` → Dynamic text size (passed via props).
       */}
      <span className={clsx("relative inline-flex overflow-hidden font-general uppercase", textSize)}>
        {/**
         * Primary Text (Visible Initially)
         *
         * Tailwind CSS:
         * - `translate-y-0` → Starts in the default position.
         * - `skew-y-0` → No skew initially.
         * - `transition duration-500` → Smooth animation (500ms).
         * - `group-hover:translate-y-[-160%]` → Moves text **upwards** on hover.
         * - `group-hover:skew-y-12` → Adds a slight skew effect.
         */}
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>

        {/**
         * Secondary Text (Appears on Hover)
         *
         * Tailwind CSS:
         * - `absolute` → Positions second text **on top of** first.
         * - `translate-y-[164%]` → Starts **below the button**.
         * - `skew-y-12` → Skews text initially.
         * - `transition duration-500` → Smooth animation.
         * - `group-hover:translate-y-0` → Moves **up** to become visible.
         * - `group-hover:skew-y-0` → Resets skew to **normal**.
         */}
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {/* Right Icon (if provided) */}
      {rightIcon}
    </button>
  );
}
