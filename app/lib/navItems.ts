const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
    // submenu: [
    //   { name: "SubMenu1", href: "/menu/submenu1" },
    //   { name: "SubMenu2", href: "/menu/submenu2" },
    // ],
  },
  {
    name: "About",
    href: "/about",
    submenu: [
        { name: "Color Scheme", href: "/colorscheme" },
        { name: "Color Showcase", href: "/colorsshow" },
        { name: "Color Tints", href: "/colortint" },
      ],
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default navItems;
