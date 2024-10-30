import logo from "../assets/Logo.svg";
const footerNavigation = {
  company: [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Terms of service", href: "#" },
  ],

  social: [
    {
      name: "Instagram",
      href: "#",
      icon: <i className="fa-brands fa-instagram"></i>,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <i className="fa-brands fa-twitter"></i>,
    },
    {
      name: "Linkendin",
      href: "#",
      icon: <i className="fa-brands fa-linkedin"></i>,
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#4B8BBE] text-white px-6 py-2">
      <div className="logo-nav flex flex-col items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex justify-evenly w-[70%] my-4">
          {footerNavigation.company.map((nav) => (
            <li className="font-light hover:font-semibold text-sm md:text-base">
              <a href={nav.href}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="line py-[0.002rem] bg-white" />
      <div className="last-footer flex justify-between items-center mt-4">
        <div className="copy-right text-sm">
          <p> &copy; 2024 Edudesks. All rights reserved.</p>
        </div>
        <div className="social w-[10%] flex justify-evenly">
          {footerNavigation.social.map((soc) => (
            <>
              <span className="sr-only">{soc.name}</span>
              <a href={soc.href} className="rounded-full py-0.5 px-1.5 bg-[#002F49]">
                {soc.icon}
              </a>
            </>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
