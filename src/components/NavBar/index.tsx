import React from "react";

// Define the props for the component
interface NavBarProps {
  logoSrc: string;
  navItems: string[];
  signInButton: {
    text: string;
  };
  getStartedButton: {
    text: string;
  };
}

// Individual Nav Item component
const NavItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <a href="#" className="text-gray-600 text-sm hover:text-gray-800">
      {children}
    </a>
  );
};

// NavBar component
const NavBar: React.FC<NavBarProps> = ({
  logoSrc,
  navItems,
  signInButton,
  getStartedButton,
}) => {
  return (
    <nav className="self-stretch px-16 pt-10 flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
      <div className="flex items-center justify-between gap-5">
        <img
          loading="lazy"
          src={logoSrc}
          className="aspect-[2.72] w-[109px]"
          alt="logo"
        />
        {navItems.map((item) => (
          <NavItem key={item}>{item}</NavItem>
        ))}
      </div>
      <div className="self-stretch flex items-center justify-between gap-5">
        <button className="text-gray-600">{signInButton.text}</button>
        <button className="text-white text-sm font-medium bg-blue-600 px-3.5 py-3 rounded-[50px]">
          {getStartedButton.text}
        </button>
      </div>
    </nav>
  );
};

const NavbarRender = () => {
  return (
    <NavBar
        logoSrc="/logo.svg"
        navItems={["Features", "Testimonials", "Pricing"]}
        signInButton={{ text: "Sign in" }}
        getStartedButton={{ text: "Get started today" }}
      />
  )
}

export default NavbarRender;
