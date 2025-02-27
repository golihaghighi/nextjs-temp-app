import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

/**
 * Social Media Links
 * - Each object contains:
 *   - `href`: The link to the social media platform.
 *   - `icon`: The corresponding React Icon component.
 */
const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

/**
 * Footer Component
 *
 * - Displays copyright text with the current year dynamically.
 * - Includes social media links with hover effects.
 * - Provides a Privacy Policy link.
 */
export default function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    /**
     * Footer Container
     *
     * Tailwind CSS:
     * - `w-screen` → Ensures full-width coverage.
     * - `bg-persian-red` → Uses a Persian Red background color.
     * - `py-4` → Adds vertical padding (4 units).
     * - `text-white` → Sets text color to white.
     */
    <footer className="w-screen bg-persian-red-70 py-4 text-white">
      {/**
       * Footer Content Wrapper
       *
       * Tailwind CSS:
       * - `container mx-auto` → Centers content with automatic margins.
       * - `flex flex-col md:flex-row` → Stacks items in a column, switches to row on `md` (medium) screens.
       * - `items-center justify-between` → Aligns items vertically and distributes space between them.
       * - `gap-4` → Adds spacing between items.
       * - `px-4` → Adds horizontal padding (4 units).
       */}
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        
        {/**
         * Copyright Text
         *
         * Tailwind CSS:
         * - `text-center md:text-left` → Centers text, aligns left on `md` screens.
         * - `text-sm font-light` → Sets small, light-weight text.
         */}
        <p className="text-center text-sm font-light md:text-left">
          ©Cyberset {currentYear}. All rights reserved.
        </p>

        {/**
         * Social Media Links
         *
         * Tailwind CSS:
         * - `flex justify-center md:justify-start` → Centers links, aligns left on `md` screens.
         * - `gap-4` → Adds spacing between icons.
         */}
        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-black"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/**
         * Privacy Policy Link
         *
         * Tailwind CSS:
         * - `text-center md:text-right` → Centers text, aligns right on `md` screens.
         * - `text-sm font-light` → Sets small, light-weight text.
         * - `hover:underline` → Underlines text on hover.
         */}
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
