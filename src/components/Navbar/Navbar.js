import Link from "next/link";

// Array of Nav Links
const navLinks = [
  {
    href: "/",
    link: "Home",
  },
  {
    href: "/",
    link: "Services",
  },
  {
    href: "/",
    link: "Schedule",
  },
  {
    href: "/",
    link: "Contact Us",
  },
];

const Navbar = () => {
  return (
    <>
      <navbar className="flex justify-between navbar">
        <header>
          <Link href="#" className="text-[25px] lg:text-[32px]">
            Vaccination.ng
          </Link>
        </header>
        <div className="block lg:hidden bg-[#C4C4C426] rounded-md px-2 pt-1">
          <button>
            <img src="/images/menu.png" alt="" className="w-7 h-auto"/>
          </button>
        </div>
        <nav className=" pt-5 hidden lg:block">
          {navLinks.map(({ href, link }) => (
            <Link
              href={href}
              className="navbar navlist-hoverEffect text-[#FFFFFF80] px-6"
              key={link}
            >
              {link}
            </Link>
          ))}
        </nav>
        <div className="pt-1 hidden lg:block">
          <button className="bg-blue-900 p-4 rounded-3xl shadow-x3 text-[#17C2EC]">
            Check Status
          </button>
        </div>
      </navbar>
     
    </>
  );
};
export default Navbar;
