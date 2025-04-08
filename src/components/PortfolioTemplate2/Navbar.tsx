interface NavbarProps {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const scrollToSection = (section: string) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["about", "experience", "education", "projects", "skills"];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <ul className="flex justify-center gap-6 p-4 text-sm font-medium text-gray-700">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => scrollToSection(item)}
            className="cursor-pointer hover:text-black transition"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
