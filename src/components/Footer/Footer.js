import Link from "next/link";
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
const images =[
    {
        id:1,
        src:"/images/socials/youtube.png",
    },
    {
        id:2,
        src:"/images/socials/instagram.png",
    },
    {
        id:3,
        src:"/images/socials/twitter.png",
    },
    {
        id:4,
        src:"/images/socials/facebook.png"
    }
]
const Footer = () => {
  return (
    <>
      <div className="block lg:flex justify-between items-center mt-[10%]">
        <div>
          <h1 className="text-[24px] py-2">Vaccination.ng</h1>
        </div>

        <div className="lg:flex justify-around ">
          {navLinks.map(({ href, link }) => (
            <Link href={href} className="block py-2 lg:px-5" key={link}>
              {link}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
            {images.map(({id,src}) => (
                <div>
                    <img src={src} className="lg:px-4 px-1 h-6  lg:h-8 "/> 
                </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Footer;
